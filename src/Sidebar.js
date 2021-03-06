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
import { useAuthValue } from "./AuthProvider";

function Sidebar() {
  const [{ user }, dispatch] = useAuthValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        title="COVID-19 Information Centre"
        src="https://cutt.ly/Dk31YhV"
        // Icon={LocalHospital}
      />
      <SidebarRow
        title="Friends"
        src="https://cutt.ly/Ek31Nqg"
        // Icon={People}
      />
      <SidebarRow
        title="Pages"
        src="https://cutt.ly/Ok30q1j"
        // Icon={EmojiFlags}
      />

      <SidebarRow
        title="Messenger"
        src="https://cutt.ly/Yk30Hyr"
        // Icon={Chat}
      />
      <SidebarRow
        title="Marketplace"
        src="https://cutt.ly/Qk4uJmm"
        // Icon={Storefront}
      />
      <SidebarRow
        title="Videos"
        src="https://cutt.ly/lk32fRG"
        // Icon={VideoLibrary}
      />
      <SidebarRow
        id="seemore"
        title="See More"
        src=""
        Icon={ExpandMoreRounded}
      />

      <hr />
    </div>
  );
}

export default Sidebar;
