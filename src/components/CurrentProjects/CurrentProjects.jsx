import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { List, message, Spin } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import "./CurrentProjects.scss";

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

const InfiniteListExample = () => {
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const history = useHistory();
  useEffect(() => {
    fetchData();
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
          <List
            itemLayout="vertical"
            size="large"
            dataSource={data}
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
                    <a target="_blank" onClick={() => handleOnClick(item.nat)}>
                      {item.name.last}
                    </a>
                  }
                  description={item.email}
                />
                <div>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </div>
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default InfiniteListExample;
