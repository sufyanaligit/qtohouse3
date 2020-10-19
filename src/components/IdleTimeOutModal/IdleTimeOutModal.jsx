import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const IdleTimeOutModal = (props) => {
  const [visible] = useState(props.showModal);
  const { handleClose, handleLogout } = props;
  const handleOk = (e) => {
    console.log(e);
    handleLogout(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    handleClose(false);
  };
  return (
    <Modal
      title='Session Timeout Warning'
      centered
      visible={visible}
      onOk={() => handleOk(false)}
      onCancel={() => handleCancel(false)}
      footer={[
        <Button key='back' onClick={handleCancel}>
          Stay LoggedIn
        </Button>,
        <Button key='submit' type='danger' onClick={handleOk}>
          Logout
        </Button>,
      ]}
    >
      You have been inactive for too long. Please press 'Stay LoggedIn' button
      to continue your session
    </Modal>
  );
};
export default IdleTimeOutModal;
