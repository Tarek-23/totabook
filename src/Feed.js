import React, { useEffect, useState } from "react";
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

      {posts.map((post) => (
        <Post
          key={post.data.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp?.toMillis()}
          message={post.data.message}
          image={post.data.image}
        />
      ))}

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
