import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./recommendedVideo";
import $ from "jquery";
export default class App extends Component {
  state = {
    show: true
  };

  hamburgerOnClick() {
    if (this.state.show) {
      $(".sidebar").css({ flex: "0.1" });
      $(".recommendedVideos").css({ flex: "0.9" });
    } else {
      $(".sidebar").css({ flex: "0.2" });
      $(".recommendedVideos").css({ flex: "0.8" });
    }

    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="app">
        {/* Header */}
        <Header menuClick={() => this.hamburgerOnClick()} />
        {/* Sidebar */}
        <div className="appPage">
          <Sidebar show={this.state.show} />
          {/* recommended */}
          <RecommendedVideo show={this.state.show} />
        </div>
      </div>
    );
  }
}
