import React from 'react';
import Loader from '../Loader';
import InfiniteListView from '../ListItem';

import './CurrentProjects.scss';

const CurrentProjects = (props) => {
  const { data, isLoading, isAdminLoggedIn } = props;

  return (
    <div className='current-projects-container'>
      {isLoading && <Loader />}
      <div className='demo-infinite-container'>
        <InfiniteListView data={data} isAdminLoggedIn={isAdminLoggedIn} />
      </div>
    </div>
  );
};
export default CurrentProjects;
