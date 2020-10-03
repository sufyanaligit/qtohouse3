import { List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getProjects = (state) => {
  const { projects } = state;
  return projects || List();
};

export const getLoginModalStatus = createSelector(getProjects, (projects) => {
  return projects.get('isLoginModal');
});
