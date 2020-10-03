import { connect } from 'react-redux';
import App from './App';
import { getLoginModalStatus } from '../store/selectors/application.selectors';

const mapStateToProps = (state) => {
  const shouldShowLoginModal = getLoginModalStatus(state);
  return { shouldShowLoginModal };
};

export default connect(mapStateToProps, {})(App);
