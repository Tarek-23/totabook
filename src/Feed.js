import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";
import db from "./firebase";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      <FlipMove appearAnimation="elevator" style={{ width: "100%" }}>
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.data.username}
            profilePic={post.data.profilePic}
            timestamp={post.data.timestamp?.toMillis()}
            message={post.data.message}
            image={post.data.image}
          />
        ))}
      </FlipMove>

      {/* <Post
        profilePic="https://cutt.ly/ck9WJOF"
        message={"message"}
        timestamp={"timestamp"}
        username={"user name"}
        image="https://cutt.ly/ck9WJOF"
      /> */}
    </div>
  );
}

export default Feed;
