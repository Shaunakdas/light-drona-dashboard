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
  FormGroup,
  ControlLabel,
  Table,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import  StandardDropdown  from "components/AcadEntity/StandardDropdown";
import  ChapterDropdown  from "components/AcadEntity/ChapterDropdown";
import  GameTable  from "components/AcadEntity/GameTable";

// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


import { thArray, tdArray } from "variables/Variables.jsx";


class GameList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                  <Row>
                    <Col md={9}>
                      <FormGroup controlId="formControlsTextarea">
                        <div className="col-md-3">
                          <ControlLabel>Standard: </ControlLabel>
                        </div>
                        <div className="col-md-5">
                          <StandardDropdown />
                        </div>
                        <div className="col-md-3">
                          <Button bsStyle="info" fill type="submit">
                            Submit Standard
                          </Button>
                        </div>
                        
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={9}>
                      <FormGroup controlId="formControlsTextarea">
                        <div className="col-md-3">
                          <ControlLabel>Chapter: </ControlLabel>
                        </div>
                        <div className="col-md-5">
                          <ChapterDropdown />
                        </div>
                        <div className="col-md-3">
                          <Button bsStyle="info" fill type="submit">
                            Submit Chapter
                          </Button>
                        </div>
                        
                      </FormGroup>
                    </Col>
                  </Row>

                    <Row>
                      <Col md={12}>
                      <GameTable />
                      </Col>
                    </Row>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={6}>
            <Row>
            <div className="card card-user">
              <div className="content">
                <p className="description text-center">
                  <ControlLabel>Selected Standard:</ControlLabel>
                  <h5 className="title">Standard_1</h5>
                </p>
                <p className="description text-center">
                  <ControlLabel>Selected Chapter:</ControlLabel>
                  <h5 className="title">Chapter_1</h5>
                </p>
                <p className="description text-center">
                  <ControlLabel>Selected Game:</ControlLabel>
                  <h5 className="title">Game_1</h5>
                </p>
                <p className="description text-center">
                  <ControlLabel>Question Count:</ControlLabel>
                  <h5 className="title">40</h5>
                </p>
              </div>
              <hr />
            </div>
            </Row>
            <Row>
            <div className="card card-user">
                      <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td key={"key"}>
                              <DropdownButton title="Edit">
                                  <MenuItem eventKey={2.1}>Action</MenuItem>
                                  <MenuItem eventKey={2.2}>Another action</MenuItem>
                                  <MenuItem eventKey={2.3}>Something</MenuItem>
                                  <MenuItem eventKey={2.4}>Another action</MenuItem>
                                  <MenuItem eventKey={2.5}>Something</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem eventKey={2.5}>Separated link</MenuItem>
                              </DropdownButton>
                            </td>
                          </tr>
                        );
                      })}
                      
                    </tbody>
                  </Table>
                  </div>
                    </Row>
            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

export default GameList;
