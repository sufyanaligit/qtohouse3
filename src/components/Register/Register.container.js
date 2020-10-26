import { connect } from 'react-redux';
import Register from './Register';
import { getLoggedInUserName } from '../../store/selectors/application.selectors';
const mapStateToProps = (state) => {
  const userName = getLoggedInUserName(state);
  return { userName };
};

export default connect(mapStateToProps, {})(Register);
