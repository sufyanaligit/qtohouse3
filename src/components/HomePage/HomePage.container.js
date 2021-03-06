import { connect } from 'react-redux';
import HomePage from './HomePage';
import { getCurrentProjectsBegin } from '../../store/actions/project.actions';
import {
  getCurrentProjectsCount,
  getFeatureProjectsCount,
  getCurrentProjectStatus,
} from '../../store/selectors/project.selectors';

const mapStateToProps = (state) => {
  const loading = getCurrentProjectStatus(state);
  const currentProjectsCount = getCurrentProjectsCount(state);
  const featureProjectsCount = getFeatureProjectsCount(state);
  return { currentProjectsCount, featureProjectsCount, loading };
};
const mapDispatchToProps = {
  getCurrentProjectsBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
