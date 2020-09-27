import { List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getProjects = (state) => {
  const { projects } = state;
  return projects || List();
};
export const getCurrentProjects = createSelector(getProjects, (projects) => {
  return projects.get('currentProjects') || List();
});

export const getAllProjects = createSelector(getProjects, (projects) => {
  const { allProjects } = projects;
  return allProjects || List();
});
export const getCurrentProjectList = createSelector(
  getCurrentProjects,
  (currentProjectsList) => {
    return currentProjectsList.get('data') || List();
  }
);

export const getCurrentProjectStatus = createSelector(
  getCurrentProjects,
  (currentProjectsList) => {
    return currentProjectsList.get('loading');
  }
);

//Project Details
export const getCurrentProjectDetails = createSelector(
  getCurrentProjects,
  (currentProjectsList) => {
    return currentProjectsList.get('projectDetails') || List();
  }
);
