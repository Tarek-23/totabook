import { Avatar } from "@material-ui/core";
import {
  InsertEmoticon,
  PhotoLibraryRounded,
  VideocamRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // db

    setInput("");
    setImageURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            placeholder="What's on your mind"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder="image URL (Optional)"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamRounded style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryRounded style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
