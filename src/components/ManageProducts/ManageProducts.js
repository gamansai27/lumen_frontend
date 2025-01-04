// src/components/ManageProducts/ManageProducts.js
import React from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
  return (
    <div className="section-container">
      <h2>Manage Products</h2>
      <div className="action-bar">
        <button className="add-btn">Add New Product</button>
        <input type="search" placeholder="Search products..." className="search-input" />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product A</td>
              <td>Electronics</td>
              <td>$299.99</td>
              <td>50</td>
              <td><span className="status-active">Active</span></td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product B</td>
              <td>Clothing</td>
              <td>$49.99</td>
              <td>100</td>
              <td><span className="status-active">Active</span></td>
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

export default ManageProducts;