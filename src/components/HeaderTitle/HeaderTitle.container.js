import { connect } from 'react-redux';
import HeaderTitle from './HeaderTitle';
import {
  setIsLoginState,
  clearUserSession,
} from '../../store/actions/project.actions';
import {
  getLoggedInStatus,
  getLoggedInUserName,
  getIsAdminLoggedIn,
} from '../../store/selectors/application.selectors';

const mapStateToProps = (state) => {
  const isLoggedIn = getLoggedInStatus(state);
  const loggedInUserName = getLoggedInUserName(state);
  const isAdminLoggedIn = getIsAdminLoggedIn(state);

  return { isLoggedIn, loggedInUserName, isAdminLoggedIn };
};
const mapDispatchToProps = {
  setIsLoginState,
  clearUserSession,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);
