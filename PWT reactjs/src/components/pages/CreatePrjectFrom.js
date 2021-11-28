import React from 'react';
import useHttp from '../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import useValidation from '../hooks/useValidation';
import classes from './CreateFrom.module.css';

const CreatePrjectFrom = () => {
  const navigate = useNavigate();
  const { sendRequest } = useHttp();
  const {
    enteredValue: enteredProjectName,
    isTouched: projectNameIsTouched,
    isValid: projectNameIsValid,
    chnageInputHandler: projectNameChangeHandler,
    blurChangeHandler: projectNameBlurChangeHandler,
    errorMsg: projectNameErrorMessage,
    validation: projectNameValidation,
  } = useValidation({
    regx: /^[a-zA-Z ]{2,100}$/,
    fieldName: 'Project Name',
    msg: 'Project Name contains only letter',
  });

  const {
    enteredValue: enteredDescription,
    isTouched: descriptionIsTouched,
    isValid: descriptionIsValid,
    chnageInputHandler: descriptionChangeHandler,
    blurChangeHandler: descriptionBlurChangeHandler,
    errorMsg: descriptionErrorMessage,
    validation: descriptionValidation,
  } = useValidation({
    regx: /^[a-zA-Z ]{2,1000}$/,
    fieldName: 'Description',
    msg: 'Description contains only letter',
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();

    projectNameValidation();
    descriptionValidation();

    if (projectNameIsValid && descriptionIsValid) {
      sendRequest({
        url: 'https://localhost:44368/api/projects/add',
        method: 'POST',
        body: {
          Name: enteredProjectName,
          Description: enteredDescription,
          Status: 'open',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    navigate('/openProject');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes['form-control']}>
        <label>Project Name</label>
        <input
          className={classes.input}
          type="text"
          value={enteredProjectName}
          onChange={projectNameChangeHandler}
          onBlur={projectNameBlurChangeHandler}
        />
        {!projectNameIsValid && projectNameIsTouched && (
          <p className={classes['error-text']}>{projectNameErrorMessage}</p>
        )}
      </div>
      <div className={classes['form-control']}>
        <label>Description</label>
        <textarea
          name="description"
          cols="30"
          rows="6"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurChangeHandler}
        ></textarea>
        {!descriptionIsValid && descriptionIsTouched && (
          <p className={classes['error-text']}>{descriptionErrorMessage}</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreatePrjectFrom;
