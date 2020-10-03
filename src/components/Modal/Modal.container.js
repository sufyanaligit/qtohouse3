import { connect } from 'react-redux';
import Modal from './Modal';
import { setIsLoginState } from '../../store/actions/project.actions';

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  setIsLoginState,
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
