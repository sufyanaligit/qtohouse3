import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { List, message, Spin } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import "./CurrentProjects.scss";

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

const CurrentProjects = (props) => {
  const { getCurrentProjectsListBegin, currentProjectList, isLoading } = props;
  console.log(isLoading);
  const [data, setData] = useState(props.currentProjectList);
  const [loading, setLoading] = useState(isLoading);
  const [hasMore, setHasMore] = useState(true);
  const history = useHistory();
  useEffect(() => {
    setLoading(isLoading);
    getCurrentProjectsListBegin();
  }, []);

  const fetchData = () => {
    setLoading(true);
    return axios
      .get(fakeDataUrl)
      .then((res) => {
        setLoading(true);
        data = data.concat(res.data.results);
        return setData(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      setLoading(false);
      setHasMore(false);
      return;
    } else {
      fetchData();
      setHasMore(true);
    }
  };

  const handleOnClick = (path) => {
    history.push(`projects/${path}`);
  };

  return (
    <div className="current-projects-container">
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={hasMore}
          useWindow={false}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
          <List
            itemLayout="vertical"
            size="large"
            dataSource={currentProjectList}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://embed.widencdn.net/img/lendlease/oizi70yizs/x650px/1000%20South%20Clark_0001_PL.jpeg?u=94eilc"
                  />
                }
              >
                <List.Item.Meta
                  title={
                    <a
                      target="_blank"
                      onClick={() => handleOnClick(item.PRJT_ID)}
                    >
                      {item.NME}
                    </a>
                  }
                  description={item.email}
                />
                <div>{item.DSCR}</div>
              </List.Item>
            )}
          ></List>
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default CurrentProjects;
