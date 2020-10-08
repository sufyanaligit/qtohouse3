import { List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getProjects = (state) => {
  const { projects } = state;
  return projects || List();
};

export const getLoginModalStatus = createSelector(getProjects, (projects) => {
  return projects.get('isLoginModal');
});

export const getLoginLoadingStatus = createSelector(getProjects, (projects) =>
  projects.getIn(['userInfo', 'loading'])
);

export const getLoggedInStatus = createSelector(getProjects, (projects) =>
  projects.getIn(['userInfo', 'isLoggedIn'])
);
