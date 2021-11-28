import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './OpenProject.module.css'

const ProjectItem = ({ id, name, description, status }) => {
  const type = localStorage.getItem('type');
  
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
     {type!=='supervisor'&& <td>
        <NavLink to={`/apply/${id}`}>Apply</NavLink>
      </td>}
    </tr>
  );
};

export default ProjectItem;
