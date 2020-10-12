import { connect } from 'react-redux';
import PendingApprovals from './PendingApprovals';
import {
  getUserApprovalLoadingStatus,
  getUserApprovalList,
} from '../../store/selectors/application.selectors';
import {
  getUserPendingApprovalListBegin,
  approvePendingStatus,
} from '../../store/actions/project.actions';

const mapStateToProps = (state) => {
  const loading = getUserApprovalLoadingStatus(state);
  const pendingList = getUserApprovalList(state);
  return { loading, pendingList };
};
const mapDispatchToProps = {
  getUserPendingApprovalListBegin,
  approvePendingStatus,
};
export default connect(mapStateToProps, mapDispatchToProps)(PendingApprovals);
