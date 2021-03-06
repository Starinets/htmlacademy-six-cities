import React from 'react';
import * as Type from '../../types';
import {NavLink} from 'react-router-dom';

import Header from '../header/header';

import {
  AppRoute,
  City
} from '../../constants';

const Login = (props) => {

  const {
    onFormSubmit,
    onEmailChange,
    onPasswordChange,
    email,
    password,
    onCityClick
  } = props;

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={ onFormSubmit }
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={ onEmailChange }
                  value={ email }
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={ onPasswordChange }
                  value={ password }
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <NavLink
                className="locations__item-link"
                to={ AppRoute.ROOT }
                onClick={() => onCityClick(City.AMSTERDAM)}
              >
                <span>Amsterdam</span>
              </NavLink>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  onFormSubmit: Type.FUNCTION.isRequired,
  onEmailChange: Type.FUNCTION.isRequired,
  onPasswordChange: Type.FUNCTION.isRequired,
  email: Type.STRING.isRequired,
  password: Type.STRING.isRequired,
  onCityClick: Type.FUNCTION.isRequired
};

export default Login;
