import React from "react";
import "./News.scss";
import PostData from "../../assets/data/Post_data.js";
import PostCard from "../../components/postcard/PostCard";
const componentDidMount = () => {
  window.scrollTo(0, 0)
}
const News = () => {
  componentDidMount();
  return (
    <div className="main_news">
      <div className="main_news__frame_title_news">
        <h1>Tin Tức</h1>
      </div>

      <div className="line_topic">
        <div className="form_topic">
          <p>Mới nhất</p>
        </div>
        <hr className="line" />
      </div>

      <div className="main_frame_section">
        {PostData.slice(0, 4).map((item, index) => (
          <div key={index}>
            <PostCard image={item.image} title={item.title} time={item.time} />
          </div>
        ))}
      </div>

      <div className="line_topic">
        <div className="form_topic">
          <p>tất cả bài viết</p>
        </div>
        <hr className="line" />
      </div>

      <div className="main_frame_section">
        {PostData.slice(0, 10).map((item, index) => (
          <div key={index}>
            <PostCard image={item.image} title={item.title} time={item.time} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
