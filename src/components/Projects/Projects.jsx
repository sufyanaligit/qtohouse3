import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import CurrentProjects from '../CurrentProjects';
import FeaturedProjects from '../FeaturedProjects';
import AllProjects from '../AllProjects';

const { TabPane } = Tabs;

const Projects = (props) => {
  const {
    getProjectsListBegin,
    isLoading,
    currentProjects,
    featuredProjects,
    allProjects,
  } = props;

  useEffect(() => {
    getProjectsListBegin();
  }, [getProjectsListBegin]);

  const callback = (key) => {
    console.log(key);
  };
  return (
    <Tabs onChange={callback} type='card' centered size='large'>
      <TabPane tab=' CURRENT PROJECTS' key='1'>
        <CurrentProjects data={currentProjects} isLoading={isLoading} />
      </TabPane>
      <TabPane tab='FEATURED PROJECTS' key='2'>
        {/* <FeaturedProjects data={featuredProjects} isLoading={isLoading} /> */}
        <h1>FeaturedProjects to be displayed here</h1>
      </TabPane>
      <TabPane tab='ALL PROJECTS' key='3'>
        <AllProjects data={allProjects} isLoading={isLoading} />
      </TabPane>
    </Tabs>
  );
};

export default Projects;
