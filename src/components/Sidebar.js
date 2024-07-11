import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Sidebar.css';
import MetrixIcon from '../assets/icons/metrixIcon.png';
import SupportIcon from '../assets/icons/headphones.png';
import GiftsIcon from '../assets/icons/gift.png';
import LogoutIcon from '../assets/icons/Logout.png';
import ChevronRight from '../assets/icons/fi_chevron-down.png';

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
          <img src={MetrixIcon} alt="Metrix" className="logo" />
          <h4 className="menu-text">Metrix</h4>
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard" onClick={() => handleSetActivePage('Dashboard')}>
            <li className={`menu-item ${activePage === 'Dashboard' ? 'active' : ''}`}>
              <i className="bi bi-grid"></i>
              <span className="menu-text">Dashboard</span>
            </li>
          </Link>
          <Link to="/orders" onClick={() => handleSetActivePage('Orders')}>
            <li className={`menu-item ${activePage === 'Orders' ? 'active' : ''}`}>
              <i className="bi bi-handbag"></i>
              <span className="menu-text">Orders</span>
            </li>
          </Link>
          <li className="menu-item">
            <i className="bi bi-people"></i>
            <span className="menu-text">Customers</span>
          </li>
          <li className="menu-item">
            <i className="bi bi-folder"></i>
            <span className="menu-text">Inventory</span>
          </li>
          <li className="menu-item">
            <i className="bi bi-chat-dots"></i>
            <span className="menu-text">Conversations</span>
          </li>
          <li className="menu-item">
            <i className="bi bi-gear"></i>
            <span className="menu-text">Settings</span>
          </li>
        </ul>
      </div>
      
      <div className="sidebar-footer">
        <li className="support-btn">
          <img src={SupportIcon} alt="Support" className="icon" />
          <span className="menu-text">Contact Support</span>
        </li>
        <li className="upgrade-btn">
          <div className='d-flex align-items-center'>
            <img src={GiftsIcon} alt="Gifts" className="icon" />
            <span className="menu-text ms-2">Free Gift Awaits You!</span>
          </div>
          <div className="upgrade-text menu-text"><span>Upgrade your account <img src={ChevronRight} alt="RightArrow" className="ms-3" /></span></div>
        </li>
        <li className="logout-btn">
          <img src={LogoutIcon} alt="Logout" className="icon" />
          <span className="menu-text text-danger">Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
