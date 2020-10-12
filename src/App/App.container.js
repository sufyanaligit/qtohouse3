import { connect } from 'react-redux';
import App from './App';
import { getLoginModalStatus } from '../store/selectors/application.selectors';
import { getLoggedInUserInfoBegin } from '../store/actions/project.actions';

const mapStateToProps = (state) => {
  const shouldShowLoginModal = getLoginModalStatus(state);
  return { shouldShowLoginModal };
};

const mapDispatchToProps = {
  getLoggedInUserInfoBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
