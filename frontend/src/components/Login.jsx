import React from 'react';
import Form from './Form';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function Login({ title, buttonText, onLogin }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    //если нет email или password, то не делаем запрос (ранний выход)
    if (!email || !password) return;
    onLogin(email, password);
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
    </div>
  );
}

export default Login;
