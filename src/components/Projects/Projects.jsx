import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import CurrentProjects from '../CurrentProjects';
import FeaturedProjects from '../FeaturedProjects';
import Search from '../SearchComponent';
import AllProjects from '../AllProjects';
import { TABS } from '../../store/qto.constants';

const { TabPane } = Tabs;

const Projects = (props) => {
  const [selectedTab, setSelectedProjectTab] = useState('currentProjects');
  const {
    getCurrentProjectsBegin,
    getFeatureProjectsBegin,
    getAllProjectsList,
    currentProjects,
    featuredProjects,
    allProjects,
    currentSelectedTab,
  } = props;

  useEffect(() => {
    if (!currentProjects.length && selectedTab === TABS.CURRENT_PROJECTS)
      getCurrentProjectsBegin();
    if (!featuredProjects.length && selectedTab === TABS.FEATURED_PROJECTS)
      getFeatureProjectsBegin();
    if (selectedTab === TABS.ALL_PROJECTS) getAllProjectsList();
  }, [
    currentProjects.length,
    featuredProjects.length,
    getCurrentProjectsBegin,
    getFeatureProjectsBegin,
    getAllProjectsList,
    selectedTab,
  ]);

  const callback = (key) => {
    const { setSelectedTab } = props;
    setSelectedProjectTab(key);
    setSelectedTab(key);
  };
  return (
    <Tabs
      activeKey={currentSelectedTab}
      onChange={callback}
      type='card'
      centered
      size='large'
    >
      <TabPane tab='CURRENT PROJECTS' key='currentProjects'>
        <Search project_type='current' />
        <CurrentProjects data={currentProjects} />
      </TabPane>
      <TabPane tab='FEATURED PROJECTS' key='featuredProjects'>
        <Search project_type='feature' />
        <FeaturedProjects data={featuredProjects} />
      </TabPane>
      <TabPane tab='ALL PROJECTS' key='allProjects'>
        <Search project_type='all' />
        <AllProjects data={allProjects} />
      </TabPane>
    </Tabs>
  );
};

export default Projects;
