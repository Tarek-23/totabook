import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";

function SidebarRow({ title, src, Icon, id }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon src={src} id={id} />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
