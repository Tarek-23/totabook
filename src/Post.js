import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  AccountCircleRounded,
  ChatBubbleOutlineRounded,
  ExpandMoreOutlined,
  ExpandMoreRounded,
  NearMeOutlined,
  NearMeRounded,
  ReplyOutlined,
  ReplyRounded,
  ThumbsUpDownRounded,
  ThumbUpAltRounded,
} from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp goes here</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt={`Image on ${username}'s post`} />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltRounded />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineRounded /> <p>Comment</p>
        </div>
        <div className="post__option">
          <ReplyRounded /> <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleRounded />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
