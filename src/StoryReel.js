import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://cutt.ly/ck9WJOF"
        profileSrc="https://cutt.ly/Sk9WuOC"
        title="Mostafa Khaled Bahgat"
      />
      <Story
        image="https://cutt.ly/8k9WAUW"
        profileSrc="https://cutt.ly/Wk9WgcB"
        title="Malek Khouri"
      />
      <Story
        image="https://cutt.ly/nk9WYQ1"
        profileSrc="https://cutt.ly/Nk9WxIT"
        title="Cristiano Ronaldo"
      />
      <Story image="" profileSrc="" title="" />
      <Story image="" profileSrc="" title="" />
    </div>
  );
}

export default StoryReel;
