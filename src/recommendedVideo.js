import React, { Component } from "react";
import "./RecommendedVideos.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import $ from "jquery";
import thumb from "./assets/thumb.png";
import channel from "./assets/channel.png";

export default class recommendedVideo extends Component {
  componentDidMount() {
    if ($(".rec-container").width() > $(".rec-controller").width()) {
      if ($(".rec-controller").scrollLeft() === 0) {
        $("#rec-forward").show();
        $("#rec-back").hide();
      }
    }
    // $("#rec-forward").css({ display: "block" });
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
      <div
        className="recommendedVideos"
        style={{ width: this.props.show ? "80vw" : "90vw" }}
      >
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
        <div id="rec-back" onClick={() => this.scrollLeft()}>
          <ArrowBackIosIcon alt="" />
        </div>
        <div id="rec-forward" onClick={() => this.scrollRight()}>
          <ArrowForwardIosIcon alt="" />
        </div>

        <div id="cards-container">
          <div className="you-cards">
            <img className="you-thumb" src={thumb} alt="" />
            <div style={{ display: "flex" }}>
              <img style={{ flex: 0.2, height: "100%" }} src={channel} alt="" />
              <div>
                <div
                  style={{
                    flex: 0.8,
                    "font-size": "1rem",
                    "max-height": "4rem",
                    fontWeight: "bold"
                  }}
                >
                  Become a Scrum hero with KnowledgeHut's
                </div>
                <div>Become a Scrum hero</div>
                <div>22K views Streamed 4 months ago</div>
              </div>
            </div>
          </div>

          <div className="you-cards">
            <img className="you-thumb" src={thumb} alt="" />
            <div style={{ display: "flex" }}>
              <img style={{ flex: 0.2, height: "100%" }} src={channel} alt="" />
              <div>
                <div
                  style={{
                    flex: 0.8,
                    "font-size": "1rem",
                    "max-height": "4rem",
                    fontWeight: "bold"
                  }}
                >
                  Become a Scrum hero with KnowledgeHut's
                </div>
                <div>Become a Scrum hero</div>
                <div>22K views Streamed 4 months ago</div>
              </div>
            </div>
          </div>

          <div className="you-cards">
            <img className="you-thumb" src={thumb} alt="" />
            <div style={{ display: "flex" }}>
              <img style={{ flex: 0.2, height: "100%" }} src={channel} alt="" />
              <div>
                <div
                  style={{
                    flex: 0.8,
                    "font-size": "1rem",
                    "max-height": "4rem",
                    fontWeight: "bold"
                  }}
                >
                  Become a Scrum hero with KnowledgeHut's
                </div>
                <div>Become a Scrum hero</div>
                <div>22K views Streamed 4 months ago</div>
              </div>
            </div>
          </div>

          <div className="you-cards">
            <img className="you-thumb" src={thumb} alt="" />
            <div style={{ display: "flex" }}>
              <img style={{ flex: 0.2, height: "100%" }} src={channel} alt="" />
              <div>
                <div
                  style={{
                    flex: 0.8,
                    "font-size": "1rem",
                    "max-height": "4rem",
                    fontWeight: "bold"
                  }}
                >
                  Become a Scrum hero with KnowledgeHut's
                </div>
                <div>Become a Scrum hero</div>
                <div>22K views Streamed 4 months ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
