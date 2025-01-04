// src/components/ManageStock/ManageStock.js
import React from 'react';
import './ManageStock.css';

const ManageStock = () => {
  return (
    <div className="section-container">
      <h2>Manage Stock</h2>
      <div className="action-bar">
        <button className="add-btn">Add Stock Entry</button>
        <input type="search" placeholder="Search inventory..." className="search-input" />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Current Stock</th>
              <th>Min Stock Level</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product A</td>
              <td>150</td>
              <td>50</td>
              <td>2024-01-04</td>
              <td><span className="status-in-stock">In Stock</span></td>
              <td>
                <button className="update-btn">Update</button>
                <button className="history-btn">History</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product B</td>
              <td>25</td>
              <td>100</td>
              <td>2024-01-03</td>
              <td><span className="status-low">Low Stock</span></td>
              <td>
                <button className="update-btn">Update</button>
                <button className="history-btn">History</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStock;