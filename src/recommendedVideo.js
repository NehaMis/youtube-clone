import React, { Component } from "react";
import "./RecommendedVideos.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import $ from "jquery";
import thumb from "./assets/thumb.png";
import channel from "./assets/channel.png";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Components/Cards";
import { recommendedVideosData } from "./recommendedVideosData";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
export default class recommendedVideo extends Component {
  componentDidMount() {
    if ($(".rec-container").width() > $(".rec-controller").width()) {
      if ($(".rec-controller").scrollLeft() === 0) {
        $("#rec-forward").show();
        $("#rec-back").hide();
      }
    }
  }

  scrollRight() {
    $(".rec-controller").animate(
      { scrollLeft: $(".rec-controller").scrollLeft() + 800 },
      500
    );
    setTimeout(() => {
      if ($(".rec-controller").scrollLeft() > 0) {
        $("#rec-back").show();
      }
      if ($(".rec-controller").scrollLeft() === 0) {
        $("#rec-back").hide();
      }
    }, 500);
  }

  scrollLeft() {
    $(".rec-controller").animate(
      { scrollLeft: $(".rec-controller").scrollLeft() - 800 },
      500
    );
  }

  render() {
    return (
      <div className="recommendedVideos" style={this.props.style || {}}>
        {isBrowser ? (
          <div className="rec-controller">
            <div className="rec-container">
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">JavaScript</div>
              <div className="rec-bar ">All</div>
              <div className="rec-bar ">JavaScript</div>
            </div>
          </div>
        ) : null}
        <div id="rec-back" onClick={() => this.scrollLeft()}>
          <ArrowBackIosIcon alt="" />
        </div>
        <div id="rec-forward" onClick={() => this.scrollRight()}>
          <ArrowForwardIosIcon alt="" />
        </div>

        <Container
          id="cards-container"
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-0 p-0 float-left"
        >
          {recommendedVideosData.map((data, index) => {
            return (
              <Cards
                thumb={data.thumb}
                channelIcon={data.channelIcon}
                channel={data.channel}
                status={data.status}
                title={data.title}
                key={index}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}
