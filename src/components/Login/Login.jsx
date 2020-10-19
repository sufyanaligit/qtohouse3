import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = (props) => {
  const { loading, isError } = props;

  const onFinish = (values) => {
    const { validateLoginCredentialsBegin } = props;
    console.log('Received values of form: ', values);
    validateLoginCredentialsBegin(values.userName, values.password);
  };

  if (isError && !loading)
    message.error('Invalid User Credentials. Please try again', 3);

  return (
    <>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          userName: 'ahmad',
          password: '123',
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name='userName'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          {/* Or <a href=''>register now!</a> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
