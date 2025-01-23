import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import NavBar from '../NavBar/NavBar';


export const Register: React.FC = () => {
  const [month, setMonth] = useState<string>('Jan');
  const [year, setYear] = useState<string>('2024');
  const [days, setDays] = useState<string[]>([]);

  const daysInMonth = (month: string, year: number) => {
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth(); // Correct template string usage
    const date = new Date(year, monthIndex + 1, 0); // Last day of the month
    const days = [];
    for (let i = 1; i <= date.getDate(); i++) {
      days.push(i.toString());
    }
    return days;
  };
  

  useEffect(() => {
    setDays(daysInMonth(month, parseInt(year)));
  }, [month, year]);

  const generateYears = (startYear: number, endYear: number) => {
    const years = [];
    for (let i = startYear; i >= endYear; i--) {
      years.push(i.toString());
    }
    return years;
  };

  return (
    <>
    <NavBar/>
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="title">StudyHub</h1>
        <h2 className="subtitle">Create a new account</h2>
        <p className="description">It's quick and easy.</p>

        <form className="signup-form">
          <div className="form-group name-inputs">
            <input type="text" placeholder="First name" className="input" />
            <input type="text" placeholder="Last name" className="input" />
          </div>

          <div className="form-group">
            <label className="label">Birthday</label>
            <div className="birthday-select">
              <select
                className="input"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                >
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              <select className="input" defaultValue="1">
                {days.map((day) => (
                    <option key={day}>{day}</option>
                ))}
              </select>
              <select
                className="input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                >
                {generateYears(2025, 1925).map((year) => (
                    <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Gender</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="female" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="male" />
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <input type="email" placeholder="User name" className="input" />
          </div>

          <div className="form-group">
            <input type="password" placeholder="New password" className="input" required />
          </div>

          <p className="policy">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
          </p>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="already-account" onClick={() => useNavigate('/login')}>
          Already have an account?
        </p>
      </div>
    </div>
                </>
  );
};