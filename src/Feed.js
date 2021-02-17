import React from "react";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
    </div>
  );
}

export default Feed;
