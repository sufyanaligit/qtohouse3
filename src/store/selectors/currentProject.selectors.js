import { List } from "immutable";
import createSelector from "../../utils/reselect";
export const getCurrentProject = (state) => {
  const { currentProjects } = state;
  return currentProjects || List();
};
export const getCurrentProjectList = createSelector(
  getCurrentProject,
  (currentProjectsList) => {
    return currentProjectsList.get("data") || List();
  }
);

export const getCurrentProjectStatus = createSelector(
  getCurrentProject,
  (currentProjectsList) => {
    return currentProjectsList.get("loading");
  }
);
