
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h2>Welcome, Admin</h2>
      </div>
      <div className="header-actions">
        <button className="profile-button">Profile</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Header;