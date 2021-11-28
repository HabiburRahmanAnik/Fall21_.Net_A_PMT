import React, { useContext, useEffect } from 'react';
import useValidation from '../hooks/useValidation';
import { useNavigate } from 'react-router-dom';
import classes from './Login.Module.css';
import AuthContext from '../../store/auth-context';

const Login = () => {
  const authCtx = useContext(AuthContext);
  const navigator = useNavigate();

  const {
    enteredValue: enteredEmail,
    isTouched: emailIsTouched,
    isValid: emailIsValid,
    chnageInputHandler: emailChangeHandler,
    blurChangeHandler: emailBlurChangeHandler,
    errorMsg: emailErrorMessage,
    validation: emailValidation,
  } = useValidation({
    regx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    fieldName: 'Email',
    msg: 'Enter valid email',
  });

  const {
    enteredValue: enteredPassword,
    isTouched: passwordIsTouched,
    isValid: passwordIsValid,
    chnageInputHandler: passwordChangeHandler,
    blurChangeHandler: passwordBlurChangeHandler,
    errorMsg: passwordErrorMessage,
    validation: passwordValidation,
  } = useValidation({
    regx: '',
    fieldName: 'Password',
    msg: '',
  });

  useEffect(() => {
    if (authCtx.status === 'complete' && !authCtx.error && authCtx.result) {
      localStorage.setItem('token', authCtx.result.Username);
      localStorage.setItem('type', authCtx.result.Type);
      navigator('/home', {
        replace: true,
      });
    }
  }, [authCtx.status, authCtx.error, authCtx.result, navigator]);

  const submitHandler = (e) => {
    e.preventDefault();
    emailValidation();
    passwordValidation();

    if (emailIsValid && passwordIsValid) {
      authCtx.onLogin({
        Email: enteredEmail,
        Password: enteredPassword,
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      <div className={classes['form-control']}>
        <label>Email</label>
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurChangeHandler}
        />
        {!emailIsValid && emailIsTouched && (
          <p className={classes['error-text']}>{emailErrorMessage}</p>
        )}
      </div>
      <div className={classes['form-control']}>
        <label>Password</label>
        <input
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurChangeHandler}
        />
        {!passwordIsValid && passwordIsTouched && (
          <p className={classes['error-text']}>{passwordErrorMessage}</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
