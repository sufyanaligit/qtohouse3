import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [form] = Form.useForm();
  const { userName } = props;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const verificationCode = {
      code: values.verificationCode,
      userName,
    };

    API.verifyCode(verificationCode).then((response) => {
      if (response.MessageCode === 1) {
        message.success(
          'Registration successful. An admin will soon approve your request',
          5
        );
        setTimeout(() => {
          history.push('/');
        }, 3000);
      } else {
        message.error(
          'You have either entered an invalid code or something went wrong at our end. Please try again',
          5
        );
      }
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
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '20%',
          }}
        />
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
