// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'users', label: 'Manage Users' },
    { id: 'products', label: 'Manage Products' },
    { id: 'suppliers', label: 'Manage Suppliers' },
    { id: 'stock', label: 'Manage Stock' }
  ];

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        {menuItems.map(item => (
          <li
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;