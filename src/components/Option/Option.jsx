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

import { Card } from "components/Card/Card.jsx";
import Attribute from "../Attribute/InputText"
import Selector from "../Attribute/Selector"

class Option extends Component {
  render() {
    let optionObj = this.props.option;
    return (
      <Card
        title="Option"
        content={
          <form>
            {/* Display */}
            <Attribute 
              title="Display"
              rows="2"
              input={optionObj.answer}

            />
            {/* Correct */}
            <Selector 
              title="Correct"
              isChecked={optionObj.correct}
            />
            <div className="clearfix" />
          </form>
        }
      />
    );
  }
}

export default Option;
