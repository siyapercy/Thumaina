import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const PostTypeSOS = () => {
  const [state, setState] = React.useState([
   
    {
      post_type: "SOS",
      id: 4,
      userImg: "/images/fawad4.jpg",
      name: "David",
      time: "2h",
      text:
        "Save Our Souls consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "/images/imrankhanpost.jpg",
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__post-MeetUps">
          </div>
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostTypeSOS;
