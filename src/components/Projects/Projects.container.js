import { connect } from 'react-redux';
import Projects from './Projects';
import { getProjectsListBegin } from '../../store/actions/project.actions';
import {
  getCurrentProjects,
  getFeaturedProjects,
  getAllProjects,
  getCurrentProjectStatus,
} from '../../store/selectors/project.selectors';

const mapStateToProps = (state) => {
  const currentProjects = getCurrentProjects(state);
  const featuredProjects = getFeaturedProjects(state);
  const allProjects = getAllProjects(state);
  const isLoading = !!getCurrentProjectStatus(state);
  return { currentProjects, featuredProjects, allProjects, isLoading };
};
const mapDispatchToProps = {
  getProjectsListBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
