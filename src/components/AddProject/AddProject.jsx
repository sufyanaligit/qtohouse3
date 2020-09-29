import React from 'react';
import moment from 'moment';
import {
  Form,
  Input,
  Tooltip,
  Space,
  Button,
  InputNumber,
  DatePicker,
  Select,
  message,
} from 'antd';

import {
  QuestionCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

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
      span: 12,
    },
    sm: {
      span: 8,
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

const AddProject = (props) => {
  const { loading, isProjectAdded } = props;
  console.log(loading);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    const { addProjectBegin } = props;
    values.statusKey = '';
    values.addUpdateInd = 0;
    values.rowId = 0;
    addProjectBegin(values);
  };

  const resetFields = () => {
    form.setFieldsValue({ name: '' });
    form.setFieldsValue({ description: '' });
    form.setFieldsValue({ location: '' });
    form.setFieldsValue({ bidAmount: '' });
    form.setFieldsValue({ bidDate: moment(new Date()) });
    form.setFieldsValue({ completionTime: moment(new Date()) });
    form.setFieldsValue({ projectType: 'current' });
    form.setFieldsValue({ solicitation: '' });
    form.setFieldsValue({ bidFrom: '' });
    form.setFieldsValue({ bidTo: '' });
    form.setFieldsValue({ biddingMethod: '' });
    form.setFieldsValue({ biddingLocation: '' });
    form.setFieldsValue({ bidPhase: '' });
    form.setFieldsValue({ liquidatedDamages: '' });
    form.setFieldsValue({ preBidMeeting: '' });
    form.setFieldsValue({ notes: '' });
    form.setFieldsValue({ csiDivisions: [] });
  };

  if (isProjectAdded) {
    resetFields();
    message.success('Project added successfully', 3);
  }

  return (
    <>
      <hr />
      <h1 style={{ textAlign: 'center' }}>
        <u>Add Project Form</u>
      </h1>
      <Form
        {...formItemLayout}
        form={form}
        name='addProject'
        onFinish={onFinish}
        initialValues={{
          name: 'Bilal ur Rehman 3',
          description: 'Testing the scenario 3',
          location: 'Location',
          bidAmount: '12',
          bidDate: moment(new Date()),
          completionTime: moment(new Date()),
          projectType: 'feature',
          solicitation: 'Test',
          bidFrom: '1',
          bidTo: '2',
          biddingMethod: 'Bidding Method',
          biddingLocation: 'Bidding Location',
          bidPhase: 'Bid Phase',
          liquidatedDamages: 'Liquidated Damages',
          preBidMeeting: 'Pre Bid Meeting',
          notes: 'Notes',
          csiDivisions: [
            { divNo: '1', divName: 'Testing' },
            { divNo: 2, divName: 'Testing 3' },
          ],
        }}
        scrollToFirstError={true}
      >
        <Form.Item
          name='name'
          label='Name'
          rules={[
            {
              required: false,
              message: 'Please input Name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='location'
          label='Location'
          rules={[
            {
              required: false,
              message: 'Please input your Location!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='description'
          label='Description'
          rules={[
            {
              required: false,
              message: 'Please input your Description!',
            },

            //dependencies={['password']}
            // hasFeedback
            // rules={[
            //   {
            //     required: false,
            //     message: 'Please confirm your password!',
            //   },
            //   ({ getFieldValue }) => ({
            //     validator(rule, value) {
            //       if (!value || getFieldValue('password') === value) {
            //         return Promise.resolve();
            //       }

            //       return Promise.reject(
            //         'The two passwords that you entered do not match!'
            //       );
            //     },
            //   }),
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name='bidAmount'
          label='Bid Amount ($)'
          rules={[
            {
              required: false,
              message: 'Please input Bid Amount!',
            },
          ]}
        >
          <InputNumber min={1} step={0.1} max={1000} />
        </Form.Item>
        <Form.Item
          name='bidDate'
          label='Bid Date'
          rules={[
            {
              required: false,
              message: 'Please select Bid Date!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={
            <span>
              <b>
                <u>Project Details</u>
              </b>
              &nbsp;
              <Tooltip title='This section contains the detail of the project'>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
        ></Form.Item>
        <Form.Item
          name='projectType'
          label='Select'
          hasFeedback
          rules={[{ required: false, message: 'Please select your country!' }]}
        >
          <Select placeholder='Please select project type'>
            <Option value='current'>Current</Option>
            <Option value='feature'>Feature</Option>
            <Option value='all'>All</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='solicitation'
          label='Solicitation'
          rules={[
            {
              required: false,
              message: 'Please select Solicitation!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='bidFrom'
          label='Bid From  ($)'
          rules={[
            {
              required: false,
              message: 'Please input Bid From!',
            },
          ]}
        >
          <InputNumber min={1} step={0.1} max={1000} />
        </Form.Item>
        <Form.Item
          name='bidTo'
          label='Bid To  ($)'
          rules={[
            {
              required: false,
              message: 'Please input Bid To!',
            },
          ]}
        >
          <InputNumber min={1} step={0.1} max={1000} />
        </Form.Item>
        <Form.Item
          name='biddingMethod'
          label='Bidding Method'
          rules={[
            {
              required: false,
              message: 'Please input your Bidding Method!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='biddingLocation'
          label='Location'
          rules={[
            {
              required: false,
              message: 'Please input your Bidding Location!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='bidPhase'
          label='Bid Phase'
          rules={[
            {
              required: false,
              message: 'Please input your Bid Phase!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='completionTime'
          label='Completion Time'
          rules={[
            {
              required: false,
              message: 'Please input your Completion Time!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name='liquidatedDamages'
          label='Liquidated Damages'
          rules={[
            {
              required: false,
              message: 'Please input your Liquidated Damages!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='preBidMeeting'
          label='Pre-bid Meeting'
          rules={[
            {
              required: false,
              message: 'Please input your Pre-bid Meeting!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='notes'
          label='Notes'
          rules={[
            {
              required: false,
              message: 'Please input your Notes	!',
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label='CSI Division'>
          <Form.List name='csiDivisions'>
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: 'flex', marginBottom: 8 }}
                      align='start'
                    >
                      <Form.Item
                        {...field}
                        name={[field.name, 'divNo']}
                        fieldKey={[field.fieldKey, 'divNo']}
                        rules={[
                          {
                            required: false,
                            message: 'Missing division number',
                          },
                        ]}
                      >
                        <Input placeholder='Division Number' />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, 'divName']}
                        fieldKey={[field.fieldKey, 'divName']}
                        rules={[
                          { required: false, message: 'Missing division name' },
                        ]}
                      >
                        <Input placeholder='Division  Name' />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type='dashed'
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddProject;
