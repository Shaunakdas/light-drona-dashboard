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
  Col,
} from "react-bootstrap";

import OptionList from "components/Option/OptionList";
import Question from "components/Question/Question";
import AgilityJson from "./agility_structure.json"

class Agility extends Component {
  
  render() {
    let questionObj = AgilityJson.game_holder_detail.question_input.sections[0];
    return (
      <Col md={12}>
        <Question questionObj={questionObj}/>
        <OptionList options={questionObj.options}/>
      </Col>
    );
  }
}

export default Agility;
