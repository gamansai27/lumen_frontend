
import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import ManageUsers from '../ManageUsers/ManageUsers';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageSuppliers from '../ManageSuppliers/ManageSuppliers';
import ManageStock from '../ManageStock/ManageStock';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <ManageUsers />;
      case 'products':
        return <ManageProducts />;
      case 'suppliers':
        return <ManageSuppliers />;
      case 'stock':
        return <ManageStock />;
      default:
        return (
          <div className="dashboard-content">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-cards">
              <div className="card" onClick={() => setActiveSection('users')}>
                <h3>Manage Users</h3>
              </div>
              <div className="card" onClick={() => setActiveSection('products')}>
                <h3>Manage Products</h3>
              </div>
              <div className="card" onClick={() => setActiveSection('suppliers')}>
                <h3>Manage Suppliers</h3>
              </div>
              <div className="card" onClick={() => setActiveSection('stock')}>
                <h3>Manage Stock</h3>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <Header />
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;