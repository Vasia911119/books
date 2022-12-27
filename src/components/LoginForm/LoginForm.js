import { Formik } from 'formik';
import { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import actions from '../../redux/auth/auth-actions';

import validationSchema from '../../validation/login';

import GoogleAuthBtn from '../GoogleAuth/GoogleAuth';
import { ButtonStyled } from '../RegularButton/Button.styled';
import {
  StyledForm,
  StyledDiv,
  StyledP,
  SubP,
  ContainerP,
} from './LoginForm.styled';

import sprite from '../../images/sprite/sprites.svg';

const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  sessionStorage.clear();

  let {
    token = null,
    email = null,
    name = null,
  } = queryString.parse(location.search);

  useEffect(() => {
    if (token && email && name) {
      dispatch(actions.loginG({ token, email, name }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDiv>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={values => {
          const { email, password } = values;

          dispatch(actions.login({ email, password }));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <StyledForm
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit(values);
              }
            }}
          >
            <ul>
              <GoogleAuthBtn />

              <li style={{ marginTop: '28px' }}>
                <label htmlFor="email" className="form__label">
                  Електронна адреса
                  {!values.email.length || errors.email ? (
                    <span> *</span>
                  ) : (
                    <></>
                  )}
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <br />
                <span className="input__error">
                  {touched.email && errors.email ? errors.email : ''}
                </span>
              </li>

              <li>
                <label htmlFor="password" className="form__label">
                  Пароль
                  {!values.password.length || errors.password ? (
                    <span> *</span>
                  ) : (
                    <></>
                  )}
                </label>

                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="..."
                  maxLength="30"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <br />

                <span className="input__error">
                  {touched.password && errors.password ? errors.password : ''}
                </span>
              </li>

              <ButtonStyled
                type="submit"
                onClick={handleSubmit}
                color="#FFFFFF"
                backgroundColor="#FF6B08;"
              >
                Увійти
              </ButtonStyled>

              <p>
                <a href="./register">Реєстрація</a>
              </p>
            </ul>
          </StyledForm>
        )}
      </Formik>
      <ContainerP>
        <StyledP>
          <svg>
            <use href={`${sprite}#icon-quotes`}></use>
          </svg>
          Книги — это корабли мысли, странствующие по волнам времени и бережно
          несущие свой драгоценный груз от поколения к поколению.
          <svg>
            <use href={`${sprite}#icon-Vector-`}></use>
          </svg>
        </StyledP>
        <SubP>Бэкон Ф.</SubP>
      </ContainerP>
    </StyledDiv>
  );
};

export default LoginForm;
