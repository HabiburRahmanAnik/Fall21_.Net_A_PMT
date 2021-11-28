import React, { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import ProjectItem from './ProjectItem';
import classes from './OpenProject.module.css'

const OpenProject = () => {
  const { sendRequest, status, error, result: responseData } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'https://localhost:44368/api/projects/openproject' });
  }, [sendRequest]);

  let resultList;

  if (status === 'complete' && !error) {
    resultList = responseData.map((item) => (
      <ProjectItem
        key={item.Id}
        id={item.Id}
        name={item.Name}
        description={item.Description}
        status={item.Status}
      />
    ));
  }

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{resultList}</tbody>
    </table>
  );
};

export default OpenProject;
