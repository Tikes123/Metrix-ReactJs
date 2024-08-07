import React from "react";
import {Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Header.css";
import AvatarIcon from "../assets/icons/avatar.png";

const Header = () => {


  return (
    <div className="header">
      <div className="header-top">
        <div className="header-right ms-auto">
          <div className="header-ico ms-4">
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div className="header-ico ms-4">
            <i class="bi bi-gear-fill"></i>
          </div>
          <div className="header-ico ms-4">
            <i className="bi bi-bell-fill"></i>
          </div>
          <div className="profile ms-3">
            <Dropdown>
              <Dropdown.Toggle className="btn-avatar">
                <img src={AvatarIcon} alt="Avatar" className="avatar-ico" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
