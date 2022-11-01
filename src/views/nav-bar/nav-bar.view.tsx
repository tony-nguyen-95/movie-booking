import React, { useEffect } from 'react';
import { Nav, Navbar, Container, ListGroup } from 'react-bootstrap';
import { INavBar } from './nav-bar.type';
import './nav-bar.style.scss';
import { DropdownItem } from '../../components';
import { CoreAuthenticationStore } from '../../stores';
import { observer } from 'mobx-react';
import { CoreUserStore } from '../../stores/store-user';

const prefixClassName = 'navbar-view';

export const NavBar: React.FC<INavBar> = observer((props) => {
  const isLogin = CoreAuthenticationStore.isLoginSelector();

  const userProfile = CoreUserStore.userProfileSelector();

  useEffect(() => {
    if (isLogin) {
      CoreUserStore.fetchUserProfileAction();
    }
  }, [isLogin]);

  return (
    <div className={prefixClassName}>
      <Container className={`${prefixClassName}__container`}>
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
                    { subTitle: 'District 1', link: '/register' },
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
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </Navbar>
          ) : (
            <div className={`${prefixClassName}__navbar-right-logined`}>
              <DropdownItem
                title={`Welcome, ${userProfile?.username}`}
                subMenu={[
                  { subTitle: `Booked tickets: ${userProfile?.seats.length}`, isText: true },
                  { subTitle: `Logout`, onAciton: () => CoreAuthenticationStore.logOutAction() },
                ]}
              />
            </div>
          )}
        </div>

        <section className={`${prefixClassName}__search-form`}>
          <form id="inner_search_form" action="/search" method="get" acceptCharset="utf-8">
            <label>
              <input
                id="inner_search_v4"
                type="text"
                autoCorrect="off"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search for a movie, tv show, person......"
                tabIndex={0}
              />
            </label>
            <i className="fa-solid fa-magnifying-glass" />
            <ListGroup className={`${prefixClassName}__search-result-list`} style={{ display: 'none' }}>
              <ListGroup.Item href="/home">Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            </ListGroup>
          </form>
        </section>
      </Container>
    </div>
  );
});
