import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <h3>Navigation</h3>
      <ul className="sidebar-list">
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;