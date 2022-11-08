import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Form, Button, Nav } from 'react-bootstrap';
import { Footer, NavBar } from '../../views';
import './login.style.scss';
import { ILoginForm, ILoginProps } from './login.type';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CoreAuthenticationStore } from '../../stores';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Loading } from '../../components';

const prefixClassName = 'login';

const schema = yup.object().shape({
  username: yup
    .string()
    .required(`Please fill out your username.`)
    .min(6, `Username should not shorter than 6 characters.`)
    .max(12, 'Username should not exceed 12 characters.'),
  password: yup
    .string()
    .required(`Please fill out your password.`)
    .min(6, `Password should not shorter than 6 characters.`)
    .max(32, 'Password should not exceed 32 characters.'),
});

export const Login: React.FC<ILoginProps> = observer((props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState('password');

  const showPasswordRef = useRef<HTMLInputElement>(null);

  const isLogin = CoreAuthenticationStore.isLoginSelector();

  const signinError = CoreAuthenticationStore.signinErrorSelector();

  const loadingSignin = CoreAuthenticationStore.loadingSigninSelector();

  const history = useHistory();

  const onSubmit = (data: ILoginForm) => CoreAuthenticationStore.signinAction(data.username, data.password);

  const onShowPassword = useCallback((e: any) => {
    if (e.target.checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      history.push('/home');
    }
  }, [history, isLogin]);

  return (
    <div className={prefixClassName}>
      <NavBar />

      <Container className={`${prefixClassName}__content-wrapper`}>
        {loadingSignin && <Loading />}

        <h4>Login to your account</h4>
        <div className={`${prefixClassName}__content-instructor`}>
          <p>
            In order to book ticket of TMDB, as well as get personal recommendations you will need to login to your
            account. If you do not have an account, registering for an account is free and simple.{' '}
            <Nav.Link style={{ display: 'inline-block', color: 'blue' }} href="/register">
              Click here
            </Nav.Link>{' '}
            to get started. Or you can use the test account: Username: <b>123123</b> - Password: <b>123123</b>
          </p>
          <p>If you signed up but didn&apos;t get your verification email, click here to have it resent.</p>
        </div>
        <Form className={`${prefixClassName}__form-wrapper`} onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formUsername" className={`${prefixClassName}__form-group`}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              className={errors.username ? `${prefixClassName}__form-control-error` : ''}
              type="text"
              placeholder="Enter your username"
              {...register('username')}
            />
            {errors.username && (
              <Form.Label className={`${prefixClassName}__form-error`}>{errors.username?.message}</Form.Label>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className={`${prefixClassName}__form-group`}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={errors.password ? `${prefixClassName}__form-control-error` : ''}
              type={showPassword}
              placeholder="Enter your password"
              {...register('password')}
            />
            {errors.password && (
              <Form.Label className={`${prefixClassName}__form-error`}>{errors.password?.message}</Form.Label>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className={`${prefixClassName}__form-group`}>
            <Form.Check
              onChange={(e) => onShowPassword(e)}
              ref={showPasswordRef}
              type="checkbox"
              label="Show password"
            />
          </Form.Group>

          {signinError && <h6 style={{ color: 'red' }}>{signinError}</h6>}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
});
