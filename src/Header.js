import React, { Component } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcons from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <span className="pointer">
            <MenuIcon onClick={() => this.props.menuClick()} />
          </span>
          <img
            className="headerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/archive/9/98/20130118135042!YouTube_Logo.svg"
            alt="youtube"
          />
        </div>
        <div className="headerInput">
          <input placeholder="Search" type="text" />
          <SearchIcon className="headerInputButton" />
        </div>
        <div className="headerIcons">
          <VideoCallIcon className="headerIcon" />
          <AppsIcon className="headerIcon" />
          <NotificationIcons className="headerIcon" />
          <Avatar
            alt="Neha Mishra"
            src="https://deadline.com/wp-content/uploads/2017/11/gal-gadot.jpg"
          />
        </div>
      </div>
    );
  }
}
