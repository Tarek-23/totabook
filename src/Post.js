import React from "react";
import moment from "moment";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  AccountCircleRounded,
  ChatBubbleOutlineRounded,
  ExpandMoreOutlined,
  MoreHoriz,
  Public,
  ReplyRounded,
  ThumbUpAltRounded,
} from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topLeft">
          <Avatar className="post__avatar" src={profilePic} />
          <div className="post__topInfo">
            <h4 className="post_username">{username}</h4>
            <p>
              {moment(timestamp).fromNow()} · <Public />
            </p>
          </div>
        </div>

        <MoreHoriz />
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      {image && (
        <div className="post__image">
          <img src={image} alt={`Image on ${username}'s post`} />
        </div>
      )}
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
