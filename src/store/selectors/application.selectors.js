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

export const getLoggedInErrorStatus = createSelector(getProjects, (projects) =>
  projects.getIn(['userInfo', 'error'])
);

export const getLoggedInUserName = createSelector(getProjects, (projects) =>
  projects.getIn(['userInfo', 'userName'])
);

export const getIsAdminLoggedIn = createSelector(getProjects, (projects) =>
  projects.getIn(['userInfo', 'isRoleAdmin'])
);

export const getUserApprovalLoadingStatus = createSelector(
  getProjects,
  (projects) => projects.getIn(['pendingApprovals', 'loading'])
);

export const getUserApprovalList = createSelector(getProjects, (projects) =>
  projects.getIn(['pendingApprovals', 'pendingUserList'])
);
