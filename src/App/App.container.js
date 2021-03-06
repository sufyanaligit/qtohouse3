import { connect } from 'react-redux';
import App from './App';
import {
  getLoggedInUserRole,
  getLoggedInStatus,
  getLoginModalStatus,
} from '../store/selectors/userInfo.selectors';
import { getApplicationErrorStatus } from '../store/selectors/application.selectors';
import {
  getLoggedInUserInfoBegin,
  clearUserSession,
} from '../store/actions/project.actions';

const mapStateToProps = (state) => {
  const shouldShowLoginModal = getLoginModalStatus(state);
  const isRoleAdmin = getLoggedInUserRole(state);
  const isError = getApplicationErrorStatus(state);
  const isLoggedIn = getLoggedInStatus(state);
  return { shouldShowLoginModal, isRoleAdmin, isError, isLoggedIn };
};

const mapDispatchToProps = {
  getLoggedInUserInfoBegin,
  clearUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
