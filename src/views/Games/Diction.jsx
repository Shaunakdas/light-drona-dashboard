import React, { Component } from "react";
import {
  Col,
} from "react-bootstrap";

import Question from "components/Question/Question";
import DictionJson from "./diction_structure.json"

class Diction extends Component {
  
  render() {
    let questionObj = DictionJson.game_holder_detail.question_input.sections[0];
    return (
      <Col md={12}>
        <Question questionObj={questionObj}/>
      </Col>
    );
  }
}

export default Diction;
