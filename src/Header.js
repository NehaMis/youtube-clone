import React, { Component } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcons from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          {!isMobile ? (
            <span className="pointer">
              <MenuIcon onClick={() => this.props.menuClick()} />
            </span>
          ) : null}

          <img
            className="headerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </div>
        <div className="headerInput">
          <input placeholder="Search" type="text" />
          <SearchIcon className="headerInputButton" />
        </div>
        <div className="headerIcons">
          {isBrowser ? (
            <>
              <VideoCallIcon className="headerIcon" />
              <AppsIcon className="headerIcon" />
              <NotificationIcons className="headerIcon" />
            </>
          ) : null}
          <Avatar
            alt="Neha Mishra"
            src="https://deadline.com/wp-content/uploads/2017/11/gal-gadot.jpg"
            style={{ float: "right" }}
          />
        </div>
      </div>
    );
  }
}
