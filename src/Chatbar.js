import React from "react";
import "./Chatbar.css";

import SidebarRow from "./SidebarRow";

function Chatbar({ data }) {
  const friends = data.friends;

  return (
    <div className="chatbar">
      {friends?.map((friend) => {
        return (
          <SidebarRow
            title={friend.name}
            src={"/friend_images/" + friend.image + ".jfif"}
          />
        );
      })}
    </div>
  );
}

export default Chatbar;
