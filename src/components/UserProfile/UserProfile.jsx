import React, { useState } from 'react';
import { Form, Input, Button, Divider, message } from 'antd';
import API from '../../store/services';
import './UserProfile.scss';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};

const UserProfile = (props) => {
  const [isRegistrationSuccessful, setUserRegistrationStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { userProfile } = props;

  const onFinish = (values) => {
    // const { registerUserBegin } = props;
    const userRegistration = values;
    userRegistration.isEdit = 1;
    userRegistration.adminIndicator = 0;
    userRegistration.approveIndicator = 0;
    userRegistration.activeIndicator = 1;
    setLoading(true);
    API.registerUser(userRegistration).then((response) => {
      const messageCode = response.data.MessageCode;
      if (messageCode === 3) {
        setUserRegistrationStatus(false);

        setLoading(false);
        setTimeout(() => {
          setUserRegistrationStatus(false);

          setLoading(false);
        }, 1000);
      } else {
        setUserRegistrationStatus(true);
        setLoading(false);
      }
    });
  };

  if (isRegistrationSuccessful) {
    form.resetFields();
    message.info('Password updated successfully', 3);
  }

  return (
    <div className='register-container'>
      <Form
        {...formItemLayout}
        form={form}
        name='userRegistrationForm'
        onFinish={onFinish}
        initialValues={{
          firstName: userProfile.FRST_NME,
          middleName: userProfile.MIDL_NME,
          lastName: userProfile.LAST_NME,
          loginId: userProfile.LOGN_ID,
          email: userProfile.EMAIL_ID,
          // password: 'BilalurRehman_27',
          // confirm: 'BilalurRehman_27',
          company: userProfile.CMPY,
        }}
        scrollToFirstError={true}
      >
        <h1 style={{ textAlign: 'center' }}>User Profile</h1>
        <Divider />
        <Form.Item
          name={'firstName'}
          label='First Name'
          // rules={[{ required: true }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name='lastName'
          label='Last Name'
          // rules={[{ required: true }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name='middleName'
          label='Middle Name'
          // rules={[{ required: tue }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name='loginId'
          label='User Name'
          // rules={[{ required: true }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          // rules={[{ type: 'email', required: true }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='company'
          label='Company'
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please input your Company Name!',
          //   },
          // ]}
        >
          <Input disabled={true} />
        </Form.Item>
        {/* <Form.Item name='role' label='Role' initialValue='customer'>
          <Select disabled style={{ width: 120 }}>
            <Option value='customer'>Customer</Option>
          </Select>
        </Form.Item> */}
        {/* <Form.Item name='introduction' label='Introduction'>
          <Input.TextArea />
        </Form.Item> */}
        <Form.Item wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit' loading={loading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserProfile;
