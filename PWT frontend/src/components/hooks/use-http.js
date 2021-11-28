import { useCallback, useReducer } from 'react';

const initialState = {
  status: 'pending',
  result: null,
  error: null,
};

const httpReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      status: 'pending',
      result: null,
      error: null,
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      status: 'complete',
      result: action.data,
      error: null,
    };
  }
  if (action.type === 'ERROR') {
    return {
      status: 'complete',
      result: null,
      error: action.errorMsg,
    };
  }

  return initialState;
};

const useHttp = () => {
  const [httpState, dispatchFn] = useReducer(httpReducer, initialState);

  const sendRequest =useCallback (async (requestData) => {
    dispatchFn({ type: 'SEND' });
    try {
      const response = await fetch(requestData.url, {
        method: requestData.method ? requestData.method : 'GET',
        body: requestData.body ? JSON.stringify(requestData.body) : null,
        headers: requestData.headers ? requestData.headers : {},
      });

      if (!response.ok) {
        throw new Error('Somthing went wrong');
      }

      const data = await response.json();
      dispatchFn({ type: 'SUCCESS', data });

    } catch (error) {
      dispatchFn({ type: 'ERROR', errorMsg: error.message });
    }
  },[]);

  return {
    sendRequest,
    result: httpState.result,
    status: httpState.status,
    error: httpState.error,
  };
};

export default useHttp;
