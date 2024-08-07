import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Sidebar.css';
import MetrixIcon from '../assets/icons/metrixIcon.png';
import LogoutIcon from '../assets/icons/Logout.png';


const Sidebar = ({ isOpen, setActivePage }) => {
  const [activePage, setActivePageLocal] = useState('Dashboard'); // Local state for active page

  const handleSetActivePage = (pageName) => {
    setActivePageLocal(pageName); // Update local state
    setActivePage(pageName); // Propagate active page to parent
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div>
        <div className="sidebar-header">
          <img src={MetrixIcon} alt="Metrix" className="logo d-none d-lg-block" />
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard" onClick={() => handleSetActivePage('Dashboard')}>
            <li className={`menu-item ${activePage === 'Dashboard' ? 'active' : ''}`}>
              <i className="bi bi-grid"></i>
            </li>
          </Link>
          <Link to="/orders" onClick={() => handleSetActivePage('Orders')}>
            <li className={`menu-item ${activePage === 'Orders' ? 'active' : ''}`}>
              <i className="bi bi-handbag"></i>
            </li>
          </Link>
          <li className="menu-item">
            <i className="bi bi-people"></i>
          </li>
          <li className="menu-item">
            <i className="bi bi-folder"></i>
          </li>
          <li className="menu-item">
            <i className="bi bi-chat-dots"></i>
          </li>
          <li className="menu-item">
            <i className="bi bi-gear"></i>
          </li>
        </ul>
      </div>
      
      <div className="sidebar-footer">
        <li className="logout-btn">
          <img src={LogoutIcon} alt="Logout" className="icon" />
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
