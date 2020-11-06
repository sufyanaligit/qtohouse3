import { connect } from 'react-redux';
import Search from './Search';
import {
  getCurrentProjectsBegin,
  setSearchPayload,
  resetSearchPayload,
  getAllProjectsList,
} from '../../store/actions/project.actions';
import { getSelectedTab } from '../../store/selectors/project.selectors';

const mapStateToProps = (state) => {
  const selectedTab = getSelectedTab(state);
  return { selectedTab };
};
const mapDispatchToProps = {
  getCurrentProjectsBegin,
  setSearchPayload,
  resetSearchPayload,
  getAllProjectsList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
