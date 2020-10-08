/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input, Button, Divider, Select } from 'antd';
import './Register.scss';

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

const Register = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
    },
  };
  return (
    <div className='register-container'>
      <Form
        {...formItemLayout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <h1 style={{ textAlign: 'center' }}>Registration</h1>
        <Divider />
        <Form.Item
          name={['user', 'name']}
          label='Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[{ type: 'email', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'password']}
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
          name={['user', 'confirm']}
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
        <Form.Item name={['user', 'company']} label='Company'>
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'customerRole']}
          label='Role'
          // rules={[{ required: true }]}
        >
          <Select disabled defaultValue='customer' style={{ width: 120 }}>
            <Option value='customer'>Customer</Option>
          </Select>
        </Form.Item>
        {/* <Form.Item name={['user', 'introduction']} label='Introduction'>
          <Input.TextArea />
        </Form.Item> */}
        <Form.Item wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
