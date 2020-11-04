import { List, Map } from 'immutable';
import createSelector from '../../utils/reselect';

export const getProjects = (state) => {
  const { projects } = state;
  return projects || List();
};

export const getSelectedTab = createSelector(getProjects, (projects) => {
  return projects.get('selectedTab');
});

export const getFeaturedProjects = createSelector(getProjects, (projects) => {
  return projects.getIn(['featuredProjects', 'data']) || [];
});

export const getCurrentProjects = createSelector(getProjects, (projects) => {
  return projects.getIn(['currentProjects', 'data']) || [];
});

export const getAllProjects = createSelector(getProjects, (projects) => {
  return projects.getIn(['allProjects', 'data']) || [];
});

export const getCurrentProjectStatus = createSelector(
  getProjects,
  (currentProjectsList) => {
    return currentProjectsList.getIn(['currentProjects', 'loading']);
  }
);

export const getFeaturedProjectStatus = createSelector(
  getProjects,
  (featuredProjectsList) => {
    return featuredProjectsList.getIn(['featuredProjects', 'loading']);
  }
);

export const getAllProjectStatus = createSelector(
  getProjects,
  (allProjectsList) => {
    return allProjectsList.getIn(['allProjects', 'loading']);
  }
);

//Project Details
export const getCurrentProjectDetails = createSelector(
  getProjects,
  (currentProjectsList) => {
    return (
      currentProjectsList.getIn(['currentProjects', 'projectDetails']) || Map()
    );
  }
);

export const getAddProjectLoadingStatus = createSelector(
  getProjects,
  (projects) => {
    return projects.get('loading');
  }
);

export const getIsProjectAddedStatus = createSelector(getProjects, (projects) =>
  projects.get('isProjectAdded')
);

export const getCurrentProjectsCount = createSelector(
  getProjects,
  (projects) => {
    return projects.getIn(['currentProjects', 'currentProjectsCount'] || 0);
  }
);

export const getFeatureProjectsCount = createSelector(
  getProjects,
  (projects) => {
    return projects.getIn(['featuredProjects', 'featureProjectsCount'] || 0);
  }
);

export const getSearchPayload = createSelector(
  getProjects,
  getSelectedTab,
  (projects, selectedTab) => {
    return projects.getIn([selectedTab, 'searchCriteria']);
  }
);

export const getSelectedTabTotalRecords = createSelector(
  getProjects,
  getSelectedTab,
  (projects, selectedTab) => {
    return projects.getIn([selectedTab, `${selectedTab}Count`]);
  }
);
