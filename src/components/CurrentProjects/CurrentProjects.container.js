import { connect } from 'react-redux';
import CurrentProjects from './CurrentProjects';
import { getIsAdminLoggedIn } from '../../store/selectors/application.selectors';
const mapStateToProps = (state) => {
  const isAdminLoggedIn = getIsAdminLoggedIn(state);
  return { isAdminLoggedIn };
};

export default connect(mapStateToProps, {})(CurrentProjects);
