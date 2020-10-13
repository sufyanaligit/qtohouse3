import React, { useState } from 'react';
import { Form, Input, Button, Divider, Select, message } from 'antd';
import { useHistory } from 'react-router-dom';
import API from '../../store/services';
import './UserProfile.scss';

const { Option } = Select;

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
  const history = useHistory();
  const [isRegistrationSuccessful, setUserRegistrationStatus] = useState(false);
  const [isUserNameAlreadyExists, setUserNameStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // const { registerUserBegin } = props;
    const userRegistration = values;
    userRegistration.isEdit = 0;
    userRegistration.adminIndicator = 0;
    userRegistration.approveIndicator = 0;
    setLoading(true);
    API.registerUser(userRegistration).then((response) => {
      const messageCode = response.data.MessageCode;
      if (messageCode === 3) {
        setUserRegistrationStatus(false);
        setUserNameStatus(true);
        setLoading(false);
        setTimeout(() => {
          setUserRegistrationStatus(false);
          setUserNameStatus(false);
          setLoading(false);
        }, 1000);
      } else {
        setUserRegistrationStatus(true);
        setUserNameStatus(false);
        setLoading(false);
      }
    });
  };

  if (isRegistrationSuccessful) {
    form.resetFields();
    message.info(
      'Registration successful. An admin will soon approve your request',
      3
    );
    history.push('/');
  }
  if (isUserNameAlreadyExists) {
    message.info('UserName already exists. Please enter a different name', 3);
  }
  return (
    <div className='register-container'>
      <Form
        {...formItemLayout}
        form={form}
        name='userRegistrationForm'
        onFinish={onFinish}
        // initialValues={{
        //   firstName: 'Bilal',
        //   middleName: 'ur',
        //   lastName: 'Rehman',
        //   loginId: 'BilalurRehman_27',
        //   email: 'bilal@gmail.com',
        //   password: 'BilalurRehman_27',
        //   confirm: 'BilalurRehman_27',
        //   company: 'QTO House',
        // }}
        scrollToFirstError={true}
      >
        <h1 style={{ textAlign: 'center' }}>User Profile</h1>
        <Divider />
        <Form.Item
          name={'firstName'}
          label='First Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='lastName'
          label='Last Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='middleName'
          label='Middle Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='loginId'
          label='User Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          rules={[{ type: 'email', required: true }]}
        >
          <Input />
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
          rules={[
            {
              required: true,
              message: 'Please input your Company Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='role' label='Role' initialValue='customer'>
          <Select disabled style={{ width: 120 }}>
            <Option value='customer'>Customer</Option>
          </Select>
        </Form.Item>
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
