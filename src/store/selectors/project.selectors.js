import { List } from 'immutable';
import createSelector from '../../utils/reselect';
export const getCurrentProject = (state) => {
  const { projects } = state;
  return projects || List();
};
export const getCurrentProjectList = createSelector(
  getCurrentProject,
  (currentProjectsList) => {
    return currentProjectsList.get('data') || List();
  }
);

export const getCurrentProjectStatus = createSelector(
  getCurrentProject,
  (currentProjectsList) => {
    return currentProjectsList.get('loading');
  }
);

//Project Details
export const getCurrentProjectDetails = createSelector(
  getCurrentProject,
  (currentProjectsList) => {
    return currentProjectsList.get('projectDetails') || List();
  }
);
