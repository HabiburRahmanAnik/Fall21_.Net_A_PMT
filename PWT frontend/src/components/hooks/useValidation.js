import { useState } from 'react';

const useValidation = (validationObj) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validation = () => {
    if (enteredValue.trim() === '') {
      setIsTouched(true);
      setIsValid(false);
      setErrorMsg(`${validationObj.fieldName} can't empty`);
      return;
    } else {
      if (validationObj.regx? !validationObj.regx.test(enteredValue):'') {
        setIsTouched(true);
        setIsValid(false);
        setErrorMsg(validationObj.msg);
        return;
      }
    }
    setIsValid(true);
  };

  const chnageInputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const blurChangeHandler = () => {
    validation(enteredValue);
  };

  return {
    enteredValue,
    isTouched,
    isValid,
    chnageInputHandler,
    blurChangeHandler,
    errorMsg,
    validation,
  };
};

export default useValidation;
