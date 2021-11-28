import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import MainHeader from './MainHeader';

const Layout = (props) => {
  const authCtx = useContext(AuthContext);

  const token = localStorage.getItem('token');

  return (
    <>
      {token && <MainHeader />}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
