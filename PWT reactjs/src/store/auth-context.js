import React, { useEffect, useState } from 'react';
import useHttp from '../components/hooks/use-http';

const AuthContext = React.createContext({
  isLoging: false,
  onLogin: (formData) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [isLoging, setisLogin] = useState(false);
  const { sendRequest, status, error, result } = useHttp();

  useEffect(()=>{
    if((status==='complete' && !error && result) || initialToken){
      setisLogin(true);
    }
  },[status,error,result,initialToken])

 

  const loginHandler = (requestData) => {
    sendRequest({
      url: 'https://localhost:44368/api/users/login',
      method: 'POST',
      body: requestData,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const logoutHandler = () => {
    setisLogin(false);
    localStorage.clear();
  };

  console.log(isLoging);

  const context = {
    status,
    error,
    isLoging: isLoging,
    onLogin: loginHandler,
    onLogout: logoutHandler,
    result: result,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
