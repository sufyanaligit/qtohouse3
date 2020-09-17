import { connect } from "react-redux";
import CurrentProjects from "./CurrentProjects";
import { getCurrentProjectsListBegin } from "../../store/actions/currentProject.actions";
import {
  getCurrentProjectList,
  getCurrentProjectStatus,
} from "../../store/selectors/currentProject.selectors";

const mapStateToProps = (state) => {
  const currentProjectList = getCurrentProjectList(state);
  const isLoading = !!getCurrentProjectStatus(state);
  return { currentProjectList, isLoading };
};
const mapDispatchToProps = {
  getCurrentProjectsListBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentProjects);
