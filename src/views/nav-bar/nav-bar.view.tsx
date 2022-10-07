import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { INavBar } from './nav-bar.type';
import './nav-bar.style.scss';
import { DropdownItem } from '../../components';

const prefixClassName = 'navbar-view';

export const NavBar: React.FC<INavBar> = (props) => {
  return (
    <div className={prefixClassName}>
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
            <Nav>
              <DropdownItem title="Movies" />
              <DropdownItem title="Cinemas" />
              <DropdownItem title="People" />
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
