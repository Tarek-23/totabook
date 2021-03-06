import React from "react";
import "./Header.css";

import {
  Search,
  SubscriptionsOutlined,
  StorefrontOutlined,
  Add,
  NotificationsActive,
  HomeRounded,
  OutlinedFlagRounded,
  ArrowDropDownRounded,
  ForumRounded,
  SupervisedUserCircleOutlined,
  MenuRounded,
} from "@material-ui/icons";

import { Avatar, IconButton } from "@material-ui/core";
import { useAuthValue } from "./AuthProvider";

function Header() {
  const [{ user }, dispatch] = useAuthValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/720px-Facebook_f_Logo_%28with_gradient%29.svg.png"
          alt="facebook logo"
        />
        <div className="header__input">
          <Search style={{ color: "grey" }} />
          <input placeholder="Search Totabook" type="text" />
        </div>

        <div className="header__menu">
          <MenuRounded />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeRounded fontSize="large" />
        </div>{" "}
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <OutlinedFlagRounded fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlined fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName.split(" ")[0]}</h4>
        </div>
        {/* <IconButton> */}
        <Add className="header__button" />
        {/* </IconButton> */}

        {/* <IconButton> */}
        <ForumRounded className="header__button" />
        {/* </IconButton> */}

        {/* <IconButton> */}
        <NotificationsActive className="header__button" />
        {/* </IconButton> */}

        {/* <IconButton> */}
        <ArrowDropDownRounded className="header__button" id="seeMore" />
        {/* </IconButton> */}
      </div>
    </div>
  );
}

export default Header;
