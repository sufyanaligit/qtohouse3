import { connect } from 'react-redux';
import AddProject from './AddProject';
import { addProjectBegin } from '../../store/actions/project.actions';
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  addProjectBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
