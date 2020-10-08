import { connect } from 'react-redux';
import Login from './Login';
import { validateLoginCredentialsBegin } from '../../store/actions/project.actions';
import {
  getLoginLoadingStatus,
  getLoggedInStatus,
} from '../../store/selectors/application.selectors';

const mapStateToProps = (state) => {
  const loading = !!getLoginLoadingStatus(state);
  const isLoggedIn = getLoggedInStatus(state);
  return { loading, isLoggedIn };
};
const mapDispatchToProps = {
  validateLoginCredentialsBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
