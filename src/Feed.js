import React from "react";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      <Post
        profilePic="https://cutt.ly/ck9WJOF"
        message={"another message"}
        timestamp={"timestamp"}
        username={"Mostafa Bahgat"}
        image=""
      />

      <Post
        profilePic="https://cutt.ly/ck9WJOF"
        message={"message"}
        timestamp={"timestamp"}
        username={"user name"}
        image="https://cutt.ly/ck9WJOF"
      />
    </div>
  );
}

export default Feed;
