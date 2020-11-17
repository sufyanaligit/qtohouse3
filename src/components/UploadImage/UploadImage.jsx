import React, { Component } from 'react';
import { Upload, message, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function beforeUpload(file) {
  const isJpgOrPng =
    file.type === 'image/jpeg' ||
    file.type === 'image/png' ||
    file.type === 'image/jpg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class UploadImage extends Component {
  state = {
    loading: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  };

  // handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     this.setState({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (imageUrl) =>
  //       this.setState({
  //         imageUrl,
  //         loading: false,
  //         fileList: info.fileList,
  //       })
  //     );
  //   }
  //};

  handleCancel = () => this.setState({ previewVisible: false });

  handleChange = ({ fileList }) => this.setState({ fileList });

  handleAction = (file) => {
    const { uploadImage } = this.props;
    uploadImage(file);
  };
  dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };
  render() {
    const {
      loading,
      fileList,
      previewVisible,
      previewImage,
      previewTitle,
    } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          name='avatar'
          listType='picture-card'
          className='avatar-uploader'
          showUploadList={true}
          fileList={fileList}
          action={this.handleAction}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
          customRequest={this.dummyRequest}
          onPreview={this.handlePreview}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

export default UploadImage;
