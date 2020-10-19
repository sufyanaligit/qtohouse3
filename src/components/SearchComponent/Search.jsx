import React, { useState } from 'react';
import moment from 'moment';
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Select,
  DatePicker,
  Card,
  InputNumber,
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './Search.scss';

const { Option } = Select;
const { RangePicker } = DatePicker;

const SearchComponent = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const searchRequest = {
      projectName: values.projectName,
      location: values.location,
      sortBy: values.sortBy,
      dateFrom: moment(values.dateRange[0]).format('YYYY-MM-DD'),
      dateTo: moment(values.dateRange[1]).format('YYYY-MM-DD'),
      bidFrom: values.bidFrom,
      bidTo: values.bidTo,
    };
    console.log('Received values of form: ', searchRequest);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='search-container'>
      <Form
        form={form}
        name='advanced_search'
        className='ant-advanced-search-form'
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name='projectName'
              label='Name'
              rules={[
                {
                  required: false,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder='Project Name' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='location'
              label='Location'
              rules={[
                {
                  required: false,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder='New York' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='sortBy'
              label='Sort'
              rules={[
                {
                  required: false,
                  message: 'Input something!',
                },
              ]}
              initialValue='bid_date-DESC'
            >
              <Select onChange={handleChange}>
                <Option value='bid_date-DESC'>
                  Bid Date (Newest to Oldest)
                </Option>
                <Option value='bid_date-ASC'>
                  Bid Date (Oldest to Newest)
                </Option>
                <Option value='bid_amount-ASC'>Bid Amount (Low to High)</Option>
                <Option value='bid_amount-DESC'>
                  Bid Amount (High to Low)
                </Option>
              </Select>
            </Form.Item>
          </Col>
          {expand && (
            <>
              <Col span={8}>
                <Card>
                  <Form.Item
                    name='dateRange'
                    label='Date Range'
                    rules={[
                      {
                        required: false,
                        message: 'Input something!',
                      },
                    ]}
                  >
                    <RangePicker />
                  </Form.Item>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Row>
                    <Form.Item
                      name='bidFrom'
                      label='Bid From'
                      rules={[
                        {
                          required: true,
                          message: 'Please input Bid From!',
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        step={0.1}
                        max={1000}
                        placeholder='Any'
                      />
                    </Form.Item>
                    <Form.Item
                      name='bidTo'
                      label='Bid To'
                      rules={[
                        {
                          required: true,
                          message: 'Please input Bid To!',
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        step={0.1}
                        max={1000}
                        placeholder='Any'
                      />
                    </Form.Item>
                  </Row>
                </Card>
              </Col>
            </>
          )}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type='primary' htmlType='submit'>
              Search
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear Filters
            </Button>
            <a
              href={() => false}
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </a>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
