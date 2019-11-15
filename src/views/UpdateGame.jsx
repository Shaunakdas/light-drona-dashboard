/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";

import Agility from "./Games/Agility.jsx";
import Purchasing from "./Games/Purchasing.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/agility-tuts.png";

class UserProfile extends Component {
  render() {
    let game = "Purchasing";  
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          <Col md={6}>
              <div className="card card-user">
                <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-culture" />
                      Standard_1
                    </h5>
                  </p>
                  <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-bookmarks" />
                      Chapter_1</h5>
                  </p>
                  <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-joy" />
                      Game_1
                    </h5>
                  </p>
                  <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-copy-file" />
                      40</h5>
                  </p>
                </div>
              </Col>
              <Col md={6}>
              <div className="card card-user">
                <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-news-paper" />
                      Selected Tab
                    </h5>
                  </p>
                  <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-musiclist" />
                      Game Type</h5>
                  </p>
                  <p className="description text-center">
                    <h5 className="title">
                      <i className="pe-7s-browser" />
                      Question Type
                    </h5>
                  </p>
                </div>
              </Col>

          </Row>
          <Row >
          <Col md={12}>
          <Image src={avatar} thumbnail />
          </Col>
          </Row>
          <Row>
          {/* {gameComponent} */}
          
          {
            {
              'Agility': <Agility />,
              'Purchasing': <Purchasing />
            }[game]
          }
          
          <Button bsStyle="info" pullRight fill type="submit">
              Update Question
            </Button>
          </Row>
          </Grid>
        </div>
    );
  }
}

export default UserProfile;
