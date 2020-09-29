import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { List, message, Spin, Button } from 'antd';
import {
  HomeFilled,
  DollarCircleFilled,
  ArrowRightOutlined,
} from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroller';

const ListItem = (props) => {
  const { data, isLoading } = props;
  //TODO: To be used later
  // const [setData] = useState(data);
  const [loading, setLoading] = useState(isLoading);
  const [hasMore, setHasMore] = useState(true);
  const history = useHistory();

  const handleInfiniteOnLoad = () => {
    //setLoading(true);
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      setLoading(false);
      setHasMore(false);
      return;
    } else {
      //  getProjectsListBegin()
      setHasMore(true);
    }
  };

  const handleOnClick = (path) => {
    history.push(`projects/${path}`);
  };
  return (
    <InfiniteScroll
      initialLoad={true}
      pageStart={0}
      loadMore={handleInfiniteOnLoad}
      hasMore={hasMore}
      useWindow={false}
    >
      {loading && hasMore && (
        <div className='demo-loading-container'>
          <Spin />
        </div>
      )}
      <List
        itemLayout='vertical'
        size='large'
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt='logo'
                src='https://embed.widencdn.net/img/lendlease/oizi70yizs/x650px/1000%20South%20Clark_0001_PL.jpeg?u=94eilc'
              />
            }
          >
            <List.Item.Meta
              title={
                <button
                  className='custom-button'
                  target='_blank'
                  onClick={() => handleOnClick(item.PRJT_ID)}
                >
                  <span className='heading'>{item.NME}</span>
                </button>
              }
              description={item.email}
            />
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <HomeFilled
                  className='icons'
                  theme='outlined'
                  label='Location'
                />
                <span className='label'>&nbsp;Location</span>
                <span className='value'>&nbsp;{item.LOC}</span>
              </div>
              <div style={{ paddingRight: 10 }}>
                <DollarCircleFilled
                  className='icons'
                  theme='outlined'
                  label='Location'
                />

                <span className='label'>&nbsp;Bid Amount</span>
                <span className='value'>&nbsp; {item.AMNT}</span>
              </div>
              <div style={{ paddingRight: 10 }}>
                <DollarCircleFilled
                  className='icons'
                  theme='outlined'
                  label='Location'
                />

                <span className='label'>&nbsp;Bid Date</span>
                <span className='value'>&nbsp; {'01-01-2020'}</span>
              </div>
              <div>
                <Button
                  type='primary'
                  onClick={() => handleOnClick(item.PRJT_ID)}
                >
                  <ArrowRightOutlined /> See Details
                </Button>
              </div>
            </div>
            <hr />
            <div>{item.DSCR}</div>
          </List.Item>
        )}
      ></List>
    </InfiniteScroll>
  );
};

export default ListItem;
