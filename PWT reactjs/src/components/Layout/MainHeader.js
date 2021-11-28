import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  const type = localStorage.getItem('type');

  return (
    <header>
      <ul className={classes['link-list']}>
       {type==='supervisor' && <li>
          <NavLink
            to="/createProject"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >
            Create
          </NavLink>
        </li>}
        <li>
          <NavLink
            to="/openProject"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >Open</NavLink>
        </li>

        {type==='supervisor' && <li>
          <NavLink
            to="/processing"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >
            Processing{' '}
          </NavLink>
        </li>}
       {type==='supervisor' &&  <li>
          <NavLink
            to="/confirm"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >
            Confirm
          </NavLink>
        </li>}
        <li>
          <NavLink to="/logout" onClick={authCtx.onLogout}>
            Logout
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
