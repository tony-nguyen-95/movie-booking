import React, { useMemo } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { INavBar } from './nav-bar.type';
import './nav-bar.style.scss';
import { DropdownItem } from '../../components';
import { CoreAuthenticationStore } from '../../stores';
import { observer } from 'mobx-react';

const prefixClassName = 'navbar-view';

export const NavBar: React.FC<INavBar> = observer((props) => {
  const isLogin: boolean = useMemo(() => CoreAuthenticationStore.isLoginSelector(), []);

  return (
    <div className={prefixClassName}>
      <Container>
        <div className={`${prefixClassName}__navbar-left`}>
          <Navbar>
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
                <DropdownItem
                  title="Movies"
                  subMenu={[
                    { subTitle: 'Popular', link: '' },
                    { subTitle: 'Now playing', link: '' },
                    { subTitle: 'Upcoming', link: '' },
                    { subTitle: 'Top rated', link: '' },
                  ]}
                />
                <DropdownItem
                  title="Cinemas"
                  subMenu={[
                    { subTitle: 'District 1', link: '' },
                    { subTitle: 'District 2', link: '' },
                  ]}
                />
                <DropdownItem title="People" subMenu={[{ subTitle: 'Popular People', link: '' }]} />
              </Nav>
            </Navbar>
          </Navbar>
        </div>
        <div className={`${prefixClassName}__navbar-right`}>
          {!isLogin ? (
            <Navbar>
              <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </Navbar>
          ) : (
            <div style={{ color: 'white' }} onClick={() => CoreAuthenticationStore.logOutAction()}>
              Welcome, Huy
            </div>
          )}
        </div>
      </Container>
    </div>
  );
});
