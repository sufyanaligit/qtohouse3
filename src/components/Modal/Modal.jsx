import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalPopup = (props) => {
  const { modalStatus, login } = props;
  const [isModalVisible, setModalVisible] = useState(modalStatus);

  const setModalVisibility = (modalVisible) => {
    const { setIsLoginState } = props;
    setModalVisible(modalVisible);
    setIsLoginState(modalVisible);
  };

  return (
    <>
      <Modal
        title='Login'
        centered
        visible={isModalVisible}
        onOk={() => setModalVisibility(false)}
        onCancel={() => setModalVisibility(false)}
        footer={null}
      >
        {login}
      </Modal>
    </>
  );
};

export default ModalPopup;
