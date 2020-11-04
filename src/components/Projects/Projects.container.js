import { connect } from 'react-redux';
import Projects from './Projects';
import {
  getCurrentProjectsBegin,
  getFeatureProjectsBegin,
  setSelectedTab,
  getAllProjectsList,
} from '../../store/actions/project.actions';
import {
  getCurrentProjects,
  getFeaturedProjects,
  getAllProjects,
  getSelectedTab,
} from '../../store/selectors/project.selectors';

const mapStateToProps = (state) => {
  const currentProjects = getCurrentProjects(state);
  const featuredProjects = getFeaturedProjects(state);
  const allProjects = getAllProjects(state);
  const currentSelectedTab = getSelectedTab(state);
  return { currentProjects, featuredProjects, allProjects, currentSelectedTab };
};
const mapDispatchToProps = {
  getCurrentProjectsBegin,
  getFeatureProjectsBegin,
  setSelectedTab,
  getAllProjectsList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
