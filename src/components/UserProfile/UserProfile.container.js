import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { getCurrentUserDetails } from '../../store/selectors/userInfo.selectors';
const mapStateToProps = (state) => {
  const userProfile = getCurrentUserDetails(state);
  return { userProfile };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
