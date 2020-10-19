import { connect } from 'react-redux';
import App from './App';
import {
  getLoginModalStatus,
  getLoggedInUserRole,
} from '../store/selectors/application.selectors';
import {
  getLoggedInUserInfoBegin,
  clearUserSession,
} from '../store/actions/project.actions';

const mapStateToProps = (state) => {
  const shouldShowLoginModal = getLoginModalStatus(state);
  const isRoleAdmin = getLoggedInUserRole(state);
  return { shouldShowLoginModal, isRoleAdmin };
};

const mapDispatchToProps = {
  getLoggedInUserInfoBegin,
  clearUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
