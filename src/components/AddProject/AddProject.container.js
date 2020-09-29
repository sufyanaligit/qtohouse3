import { connect } from 'react-redux';
import AddProject from './AddProject';
import { addProjectBegin } from '../../store/actions/project.actions';
import {
  getAddProjectLoadingStatus,
  getIsProjectAddedStatus,
} from '../../store/selectors/project.selectors';

const mapStateToProps = (state) => {
  const loading = getAddProjectLoadingStatus(state);
  const isProjectAdded = getIsProjectAddedStatus(state);
  return { loading, isProjectAdded };
};
const mapDispatchToProps = {
  addProjectBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
