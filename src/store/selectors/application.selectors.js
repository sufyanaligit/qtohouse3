import { List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getProjects = (state) => {
  const { projects } = state;
  return projects || List();
};

export const getUserApprovalLoadingStatus = createSelector(
  getProjects,
  (projects) => projects.getIn(['pendingApprovals', 'loading'])
);

export const getUserApprovalList = createSelector(getProjects, (projects) =>
  projects.getIn(['pendingApprovals', 'pendingUserList'])
);

export const getApplicationErrorStatus = createSelector(
  getProjects,
  (projects) => {
    return projects.getIn(['applicationError', 'error']);
  }
);
