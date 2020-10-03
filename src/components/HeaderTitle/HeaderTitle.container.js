import { connect } from 'react-redux';
import HeaderTitle from './HeaderTitle';
import { setIsLoginState } from '../../store/actions/project.actions';

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  setIsLoginState,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);
