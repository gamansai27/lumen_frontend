// src/components/ManageSuppliers/ManageSuppliers.js
import React from 'react';
import './ManageSuppliers.css';

const ManageSuppliers = () => {
  return (
    <div className="section-container">
      <h2>Manage Suppliers</h2>
      <div className="action-bar">
        <button className="add-btn">Add New Supplier</button>
        <input type="search" placeholder="Search suppliers..." className="search-input" />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Contact Person</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Supplier Co Ltd</td>
              <td>John Smith</td>
              <td>john@supplier.com</td>
              <td>+1 234 567 890</td>
              <td><span className="status-active">Active</span></td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Global Supplies Inc</td>
              <td>Jane Doe</td>
              <td>jane@globalsupplies.com</td>
              <td>+1 987 654 321</td>
              <td><span className="status-inactive">Inactive</span></td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSuppliers;