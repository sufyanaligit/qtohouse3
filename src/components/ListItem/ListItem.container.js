import { connect } from 'react-redux';
import ListItem from './ListItem';
import { performLazyLoadSearchBegin } from '../../store/actions/project.actions';
import {
  getSearchPayload,
  getSelectedTabTotalRecords,
  getCurrentProjectStatus,
} from '../../store/selectors/project.selectors';

import { getIsAdminLoggedIn } from '../../store/selectors/userInfo.selectors';

const mapStateToProps = (state) => {
  const isAdminLoggedIn = getIsAdminLoggedIn(state);
  const isLoading = getCurrentProjectStatus(state);
  const totalRecords = getSelectedTabTotalRecords(state);
  const searchPayload = getSearchPayload(state);
  return { totalRecords, searchPayload, isLoading, isAdminLoggedIn };
};
const mapDispatchToProps = { performLazyLoadSearchBegin };
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
