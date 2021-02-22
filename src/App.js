import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./recommendedVideo";
import $ from "jquery";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

export default class App extends Component {
  state = {
    show: true,
    isBrowser: isBrowser
  };

  updateDimensions() {
    window.location.reload();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

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
        <BrowserView>
          <div className="appPage">
            {this.state.show ? <Sidebar show={this.state.show} /> : null}
            <RecommendedVideo
              style={{ width: this.state.show ? "80vw" : "100vw" }}
              show={this.state.show}
            />
          </div>
        </BrowserView>
        <MobileView>
          <RecommendedVideo style={{ flex: 1 }} show={this.state.show} />
        </MobileView>
      </div>
    );
  }
}
