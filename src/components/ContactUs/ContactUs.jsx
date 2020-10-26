import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import './ContactUs.scss';

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ContactUs = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className='contact-us-container'>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <Divider />
      <Form
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label='Name'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={['user', 'introduction']} label='Message'>
          <Input.TextArea rows='7' />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
