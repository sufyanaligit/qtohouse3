import { List, Map } from 'immutable';
import createSelector from '../../utils/reselect';

export const getProjects = (state) => {
  const { projects } = state;
  return projects || List();
};

export const getFeaturedProjects = createSelector(getProjects, (projects) => {
  return projects.getIn(['featureProjects', 'data']) || List();
});

export const getCurrentProjects = createSelector(getProjects, (projects) => {
  return projects.getIn(['currentProjects', 'data']) || List();
});

export const getAllProjects = createSelector(getProjects, (projects) => {
  return projects.getIn(['allProjects', 'data']) || List();
});

// export const getCurrentProjects = createSelector(
//   getCurrentProjects,
//   (currentProjectsList) => {
//     return currentProjectsList.get('data') || List();
//   }
// );

export const getCurrentProjectStatus = createSelector(
  getProjects,
  (currentProjectsList) => {
    return currentProjectsList.getIn(['currentProjects', 'loading']);
  }
);

export const getFeaturedProjectStatus = createSelector(
  getProjects,
  (featuredProjectsList) => {
    return featuredProjectsList.getIn(['featureProjects', 'loading']);
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
    return projects.getIn(['featureProjects', 'featureProjectsCount'] || 0);
  }
);

export const getSearchPayload = createSelector(getProjects, (projects) => {
  return projects.get('searchCriteria');
});
