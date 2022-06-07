import { Formik } from 'formik';
import { useWindowWidth } from '@react-hook/window-size';

import validationSchema from '../../validation/register';

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
  const width = useWindowWidth();
  // console.log(width);

  return (
    <StyledDiv>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={values => {
          // fetch('http://localhost:3001/api/users/signup', {
          //   method: 'POST',
          //   body: JSON.stringify({
          //     name: values.name,
          //     email: values.email,
          //     password: values.password,
          //   }),
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // });
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <StyledForm>
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
                {touched.email && errors.email && <span>{errors.email}</span>}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <br />
                {touched.password && errors.password && (
                  <span>{errors.password}</span>
                )}
              </li>

              <ButtonStyled
                disabled={
                  (!isValid && dirty) ||
                  (!isValid && !dirty) ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
                type="submit"
                onClick={handleSubmit}
                color="#FFFFFF"
                backgroundColor="#FF6B08;"
              >
                Увійти
              </ButtonStyled>

              <p>
                <a href="./">Реєстрація</a>
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