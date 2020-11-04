import React from 'react';
import InfiniteListView from '../ListItem';

import './CurrentProjects.scss';

const CurrentProjects = (props) => {
  const { data } = props;
  return (
    <div className='current-projects-container'>
      <div className='demo-infinite-container'>
        <InfiniteListView data={data} />
      </div>
    </div>
  );
};
export default CurrentProjects;
