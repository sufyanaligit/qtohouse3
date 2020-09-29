import React from 'react';
import Loader from '../Loader';
import InfiniteListView from '../ListItem';
import './AllProjects.scss';

const AllProjects = (props) => {
  const { data, isLoading } = props;

  return (
    <div className='current-projects-container'>
      {isLoading && <Loader />}
      <div className='demo-infinite-container'>
        <InfiniteListView data={data} />
      </div>
    </div>
  );
};
export default AllProjects;
