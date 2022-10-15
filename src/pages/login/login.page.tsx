import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Footer, NavBar } from '../../views';
import './login.style.scss';
import { ILoginProps } from './login.type';

const prefixClassName = 'login';

export const Login: React.FC<ILoginProps> = (props) => {
  return (
    <div className={prefixClassName}>
      <NavBar />

      <Container className={`${prefixClassName}__content-wrapper`}>
        <h4>Login to your account</h4>
        <div className={`${prefixClassName}__content-instructor`}>
          <p>
            In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you
            will need to login to your account. If you do not have an account, registering for an account is free and
            simple. <a href="/register">Click here</a> to get started.
          </p>
          <p>If you signed up but didn&apos;t get your verification email, click here to have it resent.</p>
        </div>
        <Form className={`${prefixClassName}__form-wrapper`}>
          <Form.Group controlId="formUsername" className={`${prefixClassName}__form-group`}>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className={`${prefixClassName}__form-group`}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className={`${prefixClassName}__form-group`}>
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
};
