import React from 'react';
import { Form, Input, Button } from 'antd';
import API from '../../../store/services';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const VerifyCode = (props) => {
  const [form] = Form.useForm();
  const { userName } = props;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const verificationCode = {
      code: values.verificationCode,
      userName,
    };

    API.verifyCode(verificationCode).then((response) => {
      debugger;
    });
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <label>QTO-</label>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name='verificationCode'
        label='Code'
        rules={[
          {
            required: true,
            message: 'Please input your verification code!',
          },
        ]}
      >
        <Input addonBefore={prefixSelector} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Verify
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VerifyCode;
