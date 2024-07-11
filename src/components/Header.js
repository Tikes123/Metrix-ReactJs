import React from "react";
import { Form, Breadcrumb, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Header.css";
import AvatarIcon from "../assets/icons/avatar.png";
import homeIcon from "../assets/icons/Home.png";

const Header = ({ activePage }) => {
  const getPageTitle = () => {
    switch (activePage) {
      case 'Dashboard':
        return 'Dashboard';
      case 'Orders':
        return 'Orders';
      case 'Customers':
        return 'Customers';
      case 'Inventory':
        return 'Inventory';
      case 'Conversations':
        return 'Conversations';
      case 'Settings':
        return 'Settings';
      default:
        return 'Dashboard'; // Default page title
    }
  };

  return (
    <div className="header">
      <div className="header-top">
        <h4>{getPageTitle()}</h4>
        <div className="header-right">
          <Form.Select aria-label="Default select" className="chooseShop">
            <option>Nanny's Shop</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <div className="notification ms-4">
            <i className="bi bi-bell-fill me-2" style={{ color: "#5570F1" }}></i>
          </div>
          <div className="profile">
            <Dropdown>
              <Dropdown.Toggle className="btn-avatar">
                <img src={AvatarIcon} alt="Avatar" className="avatar" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <Breadcrumb>
          <Breadcrumb.Item href="#"><img src={homeIcon} alt="Home" className="crumbIcon" /></Breadcrumb.Item>
          <Breadcrumb.Item active>{getPageTitle()}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Header;
