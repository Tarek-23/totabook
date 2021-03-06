import React, { useEffect, useState } from "react";
import "./Rsidebar.css";

import Birthday from "./Birthday";
import Chatbar from "./Chatbar.js";

function Rsidebar() {
  const [friendData, setFriendData] = useState({});

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriendData(data);
      });
  }, []);

  return (
    <div className="rsidebar">
      <h2 className="rsidebar__label">Birthdays</h2>
      <Birthday />
      <h3 className="rsidebar__label">Contacts</h3>
      <Chatbar data={friendData} />
    </div>
  );
}

export default Rsidebar;
