import { connect } from 'react-redux';
import UploadImage from './UploadImage';
import { uploadImage } from '../../store/actions/project.actions';

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  uploadImage,
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
