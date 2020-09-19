import { connect } from "react-redux";
import ProjectDetails from "./ProjectDetails";
import { getCurrentProjectDetailsBegin } from "../../store/actions/project.actions";
import {
  getCurrentProjectDetails,
  getCurrentProjectStatus,
} from "../../store/selectors/project.selectors";

const mapStateToProps = (state) => {
  const projectDetails = getCurrentProjectDetails(state);
  const isLoading = !!getCurrentProjectStatus(state);
  return { projectDetails, isLoading };
};
const mapDispatchToProps = {
  getProjectDetails: getCurrentProjectDetailsBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
