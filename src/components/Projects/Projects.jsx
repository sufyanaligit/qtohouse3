import React from "react";
import { Tabs } from "antd";
import CurrentProjects from "../CurrentProjects";

const { TabPane } = Tabs;

const Projects = (props) => {
  const callback = (key) => {
    console.log(key);
  };
  return (
    <Tabs onChange={callback} type="card" centered size="large">
      <TabPane tab=" CURRENT PROJECTS" key="1">
        <CurrentProjects />
      </TabPane>
      <TabPane tab="FEATURED PROJECTS" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="ALL PROJECTS" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Projects;
