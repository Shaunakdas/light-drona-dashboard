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
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class InputText extends Component {
  render() {
    console.log(this.props.input);
    return (
      (this.props.input === undefined)?
        null : 
        <Row>
          <Col md={6}>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>
                {this.props.title}
              </ControlLabel>
              <FormControl
                rows={this.props.rows}
                componentClass="textarea"
                bsClass="form-control"
                placeholder="Here can be your description"
                defaultValue={this.props.input}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <ControlLabel>Final {this.props.title}</ControlLabel>
            <h5 className="title">{this.props.input}</h5>
          </Col>
        </Row>
    );
  }
}

export default InputText;
