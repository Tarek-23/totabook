import React from "react";
import SidebarRow from "./SidebarRow";

import "./Sidebar.css";
import {
  Chat,
  EmojiFlags,
  ExpandMoreRounded,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://cutt.ly/ck9vYu6" title="Tarek Radwan" />
      <SidebarRow
        title="COVID-19 Information Centre"
        src=""
        Icon={LocalHospital}
      />
      <SidebarRow title="Pages" src="" Icon={EmojiFlags} />
      <SidebarRow title="Friends" src="" Icon={People} />
      <SidebarRow title="Messenger" src="" Icon={Chat} />
      <SidebarRow title="Marketplace" src="" Icon={Storefront} />
      <SidebarRow title="Videos" src="" Icon={VideoLibrary} />
      <SidebarRow
        id="seemore"
        title="See More"
        src=""
        Icon={ExpandMoreRounded}
      />
    </div>
  );
}

export default Sidebar;
