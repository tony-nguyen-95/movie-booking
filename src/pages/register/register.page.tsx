import React from 'react';
import { Row, Container, Col, ListGroup, Form, Button, NavLink } from 'react-bootstrap';
import { Footer, NavBar } from '../../views';
import './register.style.scss';
import { IRegisterProps } from './register.type';

const prefixClassName = 'register';

export const Register: React.FC<IRegisterProps> = (props) => {
  return (
    <div className={prefixClassName}>
      <NavBar />
      <Container className={`${prefixClassName}__content-wrapper`}>
        <Row>
          <Col xs={3} className={`${prefixClassName}__pannel-wrapper`}>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Benefits of being a member
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Find something to watch on cinema what is near your location.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Log the movies and TV shows you have watched.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Keep track of your favourite movies and TV shows and get recommendations from them.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Build and maintain a personal watchlist.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Build and maintain a personal watchlist.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Build custom mixed lists (movies and TV).
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Contribute to, and improve the information in our database.
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={9}>
            <h3>Sign up for an account</h3>
            <p>
              Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required
              to to continue.
            </p>
            <Form className={`${prefixClassName}__form-wrapper`}>
              <Form.Group controlId="formUsername" className={`${prefixClassName}__form-group`}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" />
              </Form.Group>

              <Form.Group controlId="formPassword" className={`${prefixClassName}__form-group`}>
                <Form.Label>Password (4 characters minimum)</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>

              <Form.Group controlId="formPassword" className={`${prefixClassName}__form-group`}>
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control type="password" placeholder="Confirm your password" />
              </Form.Group>

              <Form.Group controlId="formEmail" className={`${prefixClassName}__form-group`}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="Confirm your password" />
              </Form.Group>

              <Form.Group controlId="formEmail" className={`${prefixClassName}__form-group`}>
                <Form.Label>
                  By clicking the &quot;Sign up&quot; button below, I certify that I have read and agree to the TMDB
                  terms of use and privacy policy.
                </Form.Label>
              </Form.Group>

              <div className={`${prefixClassName}__form-actions-group`}>
                <Button variant="primary" type="submit">
                  Register
                </Button>
                <NavLink>Cancel</NavLink>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
