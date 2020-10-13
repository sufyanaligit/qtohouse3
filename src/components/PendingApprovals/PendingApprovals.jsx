import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Divider, Spin, Tooltip } from 'antd';
import Highlighter from 'react-highlight-words';
import {
  SearchOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import './PendingApprovals.scss';

const PendingApprovals = (props) => {
  const { loading, pendingList, getUserPendingApprovalListBegin } = props;
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [searchInput, setSearchInput] = useState('');
  console.log('loading', loading);
  useEffect(() => {
    getUserPendingApprovalListBegin();
  }, [getUserPendingApprovalListBegin]);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            setSearchInput(node);
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        searchInput && setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const handleApproveClick = (userId, loginId, activeIndicator) => {
    const { approvePendingStatusBegin } = props;
    const data = {
      isEdit: 1,
      adminIndicator: 0,
      approveIndicator: 1,
      userId,
      loginId,
      activeIndicator,
    };
    approvePendingStatusBegin(data);
  };
  const handleRejectClick = (userId, loginId, activeIndicator) => {
    const { approvePendingStatusBegin } = props;
    const data = {
      isEdit: 1,
      adminIndicator: 0,
      approveIndicator: 0,
      userId,
      loginId,
      activeIndicator,
    };
    approvePendingStatusBegin(data);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'FRST_NME',
      key: 'name',

      render: (data) => {
        return data.FRST_NME;
      },
      ...getColumnSearchProps('FRST_NME'),
    },
    {
      title: 'Last Name',
      dataIndex: 'LAST_NME',
      key: 'lastName',

      render: (data) => {
        return data.LAST_NME;
      },
      ...getColumnSearchProps('LAST_NME'),
    },
    {
      title: 'User Name',
      dataIndex: 'LOGN_ID',
      key: 'userName',
      width: '20%',
      render: (data) => {
        return data.LOGN_ID;
      },
      ...getColumnSearchProps('LOGN_ID'),
    },
    {
      title: 'EMAIL_ID',
      dataIndex: 'EMAIL_ID',
      key: 'emailId',
      width: '20%',
      ...getColumnSearchProps('EMAIL_ID'),
    },
    {
      title: 'Active',
      dataIndex: 'APPR_IND',
      key: 'status',
      render: (approveIndicator) => {
        return approveIndicator === true ? (
          <Tooltip title='active'>
            <CheckCircleTwoTone twoToneColor='#52c41a' />
          </Tooltip>
        ) : (
          <Tooltip title='inactive'>
            <CloseCircleTwoTone twoToneColor='#eb2f96' />
          </Tooltip>
        );
      },
    },
    {
      title: '',
      dataIndex: '',
      key: 'action',
      render: (data) => {
        return (
          <>
            {data.APPR_IND === true ? (
              ''
            ) : (
              <>
                <Button
                  type='primary'
                  title='Approve'
                  onClick={() =>
                    handleApproveClick(
                      data.USER_ID,
                      data.LOGN_ID,
                      !!data.ACT_IND
                    )
                  }
                >
                  Approve <CheckCircleTwoTone />
                </Button>{' '}
                &nbsp;
                <Button
                  type='danger'
                  title='Reject'
                  onClick={() =>
                    handleRejectClick(
                      data.USER_ID,
                      data.LOGN_ID,
                      !!data.ACT_IND
                    )
                  }
                >
                  Reject
                  <CloseCircleTwoTone />
                </Button>
              </>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className='pending-approvals-container'>
      <h1>Pending Approvals</h1>
      <Spin spinning={loading}>
        <Divider />
        <Table
          columns={columns}
          dataSource={pendingList}
          pagination={{
            pageSizeOptions: ['10', '20', '30'],
            showSizeChanger: true,
            pageSize: 10,
          }}
        />
      </Spin>
    </div>
  );
};

export default PendingApprovals;
