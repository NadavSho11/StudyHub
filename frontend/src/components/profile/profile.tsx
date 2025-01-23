import React, { useState } from 'react';
import './Profile.css';

export const Profile: React.FC = () => {
  // Hardcoded example user data
  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: '1992-07-15',
    gender: 'Female',
    username: 'janedoe123',
  };

  const [password, setPassword] = useState('examplepassword');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    if (newPassword.trim()) {
      setPassword(newPassword);
      setNewPassword('');
      setShowPasswordChange(false);
      alert('Password changed successfully!');
    } else {
      alert('Please enter a valid password.');
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      <div className="profile-card">
        <div className="profile-info">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Birth Date:</strong> {user.birthDate}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Password:</strong> ••••••••</p>
        </div>

        <button
          className="change-password-btn"
          onClick={() => setShowPasswordChange(!showPasswordChange)}
        >
          Change Password
        </button>

        {showPasswordChange && (
          <div className="password-change-section">
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="password-input"
            />
            <button className="save-password-btn" onClick={handlePasswordChange}>
              Save Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
