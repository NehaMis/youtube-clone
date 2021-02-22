import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export default function cards(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mt-2 m-0 p-2 cards float-left">
      <Container className="p-0 m-0">
        <img
          src={props.thumb}
          className="w-100"
          style={{ height: "11rem" }}
          alt=""
        />

        <Row className="m-0 p-0 pt-2">
          <div style={{ width: "20%" }}>
            <img src={props.channelIcon} className="w-100" alt="" />
          </div>

          <div style={{ width: "80%" }}>
            <div className="card-title">{props.title}</div>
            <div className="card-description">
              {props.channel}
              <br />
              {props.status}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
