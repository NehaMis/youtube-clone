import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="sidebar"
        style={{ width: this.props.show ? "20vw" : "10vw" }}
      >
        {this.props.show ? (
          <>
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <div className="spliter" />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <div className="spliter" />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
          </>
        ) : null}
      </div>
    );
  }
}
