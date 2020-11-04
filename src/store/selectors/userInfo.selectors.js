import { Map, List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getUserInfo = (state) => {
  const { userInfo } = state;
  return userInfo || List();
};

export const getLoginModalStatus = createSelector(getUserInfo, (projects) => {
  return projects.get('isLoginModal');
});

export const getLoginLoadingStatus = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'loading'])
);

export const getLoggedInStatus = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'isLoggedIn'])
);

export const getLoggedInErrorStatus = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'error'])
);

export const getLoggedInUserName = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'userName'])
);

export const getIsAdminLoggedIn = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'isRoleAdmin'])
);

export const getLoggedInUserRole = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'isRoleAdmin'] || false)
);

export const getCurrentUserDetails = createSelector(getUserInfo, (projects) =>
  projects.getIn(['userInfo', 'loggedInUserDetails'] || Map())
);
