import { connect } from 'react-redux';
import Login from './Login';
import { validateLoginCredentialsBegin } from '../../store/actions/project.actions';
import {
  getLoginLoadingStatus,
  getLoggedInErrorStatus,
} from '../../store/selectors/application.selectors';

const mapStateToProps = (state) => {
  const loading = !!getLoginLoadingStatus(state);
  const isError = getLoggedInErrorStatus(state);
  return { loading, isError };
};
const mapDispatchToProps = {
  validateLoginCredentialsBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
