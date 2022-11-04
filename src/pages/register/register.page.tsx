import React, { useEffect } from 'react';
import { Row, Container, Col, ListGroup, Form, Button, NavLink } from 'react-bootstrap';
import { Footer, NavBar } from '../../views';
import './register.style.scss';
import { IRegisterForm, IRegisterProps } from './register.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CoreAuthenticationStore } from '../../stores';
import { observer } from 'mobx-react';
import { Loading } from '../../components';
import { useHistory } from 'react-router-dom';

const prefixClassName = 'register';

const schema = yup.object().shape({
  registerUsername: yup
    .string()
    .required(`Please fill out your username.`)
    .min(6, `Username should not shorter than 6 characters.`)
    .max(12, 'Username should not exceed 12 characters.'),
  registerPassword: yup
    .string()
    .required(`Please fill out your password.`)
    .min(6, `Password should not shorter than 6 characters.`)
    .max(32, 'Password should not exceed 32 characters.'),
  registerPasswordConfirmation: yup.string().oneOf([yup.ref('registerPassword'), null], 'Passwords must match'),
});

export const Register: React.FC<IRegisterProps> = observer((props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IRegisterForm) => {
    return CoreAuthenticationStore.signupAction(data.registerUsername, data.registerPassword);
  };

  const successRegister = CoreAuthenticationStore.isRegisterSuccessSelector();

  const history = useHistory();

  const isLogin = CoreAuthenticationStore.isLoginSelector();

  // Log-out before register when user login-ed
  useEffect(() => {
    if (isLogin) {
      CoreAuthenticationStore.logOutAction();
    }
  }, [isLogin]);

  // Redirect to login when register success
  useEffect(() => {
    if (successRegister) {
      history.push('/login');
    }
  }, [history, successRegister]);

  return (
    <div className={prefixClassName}>
      <NavBar />
      <Container className={`${prefixClassName}__content-wrapper`}>
        {CoreAuthenticationStore.loadingSignupSelector() && <Loading />}
        <Row>
          <Col md={9} xs={12}>
            <h3>Sign up for an account</h3>
            <p>
              Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required
              to to continue.
            </p>
            <Form className={`${prefixClassName}__form-wrapper`} onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="registerUsername" className={`${prefixClassName}__form-group`}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className={errors.registerUsername ? `${prefixClassName}__form-control-error` : ''}
                  type="text"
                  placeholder="Enter your username"
                  {...register('registerUsername')}
                />
                {errors.registerUsername && (
                  <Form.Label className={`${prefixClassName}__form-error`}>
                    {errors.registerUsername?.message}
                  </Form.Label>
                )}
              </Form.Group>

              <Form.Group controlId="registerPassword" className={`${prefixClassName}__form-group`}>
                <Form.Label>Password (6 characters minimum)</Form.Label>
                <Form.Control
                  className={errors.registerPassword ? `${prefixClassName}__form-control-error` : ''}
                  type="password"
                  placeholder="Enter your password"
                  {...register('registerPassword')}
                />
                {errors.registerPassword && (
                  <Form.Label className={`${prefixClassName}__form-error`}>
                    {errors.registerPassword?.message}
                  </Form.Label>
                )}
              </Form.Group>

              <Form.Group controlId="registerConfirmPassword" className={`${prefixClassName}__form-group`}>
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  className={errors.registerPasswordConfirmation ? `${prefixClassName}__form-control-error` : ''}
                  type="password"
                  placeholder="Confirm your password"
                  {...register('registerPasswordConfirmation')}
                />
                {errors.registerPasswordConfirmation && (
                  <Form.Label className={`${prefixClassName}__form-error`}>
                    {errors.registerPasswordConfirmation?.message}
                  </Form.Label>
                )}
              </Form.Group>

              <Form.Group controlId="formEmail" className={`${prefixClassName}__form-group`}>
                <Form.Label>
                  By clicking the &quot;Sign up&quot; button below, I certify that I have read and agree to the TMDB
                  terms of use and privacy policy.
                </Form.Label>
              </Form.Group>
              {CoreAuthenticationStore.signupErrorSelector() && (
                <h6 style={{ color: 'red' }}>{CoreAuthenticationStore.signupErrorSelector()}</h6>
              )}

              <div className={`${prefixClassName}__form-actions-group`}>
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
                <NavLink href="/home">Cancel</NavLink>
              </div>
            </Form>
          </Col>

          <Col md={3} xs={12} className={`${prefixClassName}__pannel-wrapper`}>
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
                Build custom mixed lists (movies and TV).
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-check" />
                Contribute to, and improve the information in our database.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
});
