import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function Register({ title, buttonText, onRegister }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;

    onRegister(email, password);
  }

  return (
    <div className="login__form-wrapper">
      <Form
        isValid={isValid}
        handleChange={handleChange}
        title={title}
        buttonText={buttonText}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
      />
      <NavLink className="login__form-link" to="/sign-in">
        Уже зарегистрированы? Войти
      </NavLink>
    </div>
  );
}

export default Register;
