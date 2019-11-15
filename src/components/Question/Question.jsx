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
import InputText from "../Attribute/InputText"

class Question extends Component {
  render() {
    let questionObj = this.props.questionObj;
    return (
        <Card
          title="Question"
          content={
            <form>
              {/* Display */}
              <InputText 
                title="Display"
                input={questionObj.question}
                rows="5"

              />
              {/* Solution */}
              <InputText 
                title="Solution"
                rows="2"
                input={questionObj.hint}
              />
              {/* Title */}
              {
                (questionObj.title === undefined)?
                  null : 
                  <InputText 
                   title="Title"
                   rows="2"
                   input={questionObj.title}
                 />
              }
              {/* Mode */}
              {
                (questionObj.mode === undefined)?
                  null : 
                  <InputText 
                   title="Mode"
                   rows="2"
                   input={questionObj.mode}
                 />
              }
              <div className="clearfix" />
            </form>
          }
        />
    );
  }
}

export default Question;
