import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { INavBar } from './nav-bar.type';
import './nav-bar.style.scss';
import { DropdownItem } from '../../components';

const prefixClassName = 'navbar';

export const NavBar: React.FC<INavBar> = (props) => {
  return (
    <div className={`${prefixClassName}`}>
      <div className={`${prefixClassName}__navbar-left`}>
        <Navbar expand="lg">
          <Navbar.Brand href="/home">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
              width="154"
              height="20"
            />
          </Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              {/* <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={() => showDropdown()}
                onMouseLeave={() => hideDropdown()}
              >
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              <DropdownItem />
              <DropdownItem />
            </Nav>
          </Navbar>
        </Navbar>
      </div>
      <div>
        {true ? (
          <>
            <div>Login</div>
            <div>Register</div>
          </>
        ) : (
          <div>Welcome, Huy</div>
        )}
      </div>
    </div>
  );
};