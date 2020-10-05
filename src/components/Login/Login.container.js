import { connect } from 'react-redux';
import Login from './Login';
import { validateLoginCredentialsBegin } from '../../store/actions/project.actions';
import {
  getAddProjectLoadingStatus,
  getCurrentProjectDetails,
  getCurrentProjectStatus,
} from '../../store/selectors/project.selectors';

const mapStateToProps = (state) => {
  const loading = getAddProjectLoadingStatus(state);
  const projectDetails = getCurrentProjectDetails(state);
  const currentProjectStatus = !!getCurrentProjectStatus(state);
  return { loading, projectDetails, currentProjectStatus };
};
const mapDispatchToProps = {
  validateLoginCredentialsBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
