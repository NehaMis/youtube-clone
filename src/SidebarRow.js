import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./SidebarRow.css";
export default function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRowIcon" />
      <h2 className="sidebarRowTitle">{title}</h2>
    </div>
  );
}
