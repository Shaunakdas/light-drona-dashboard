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

import Question from "components/Question/Question";
import AgilityJson from "./agility_structure.json";
import ConversionJson from "./conversion_structure.json";
import PurchasingJson from "./purchasing_structure.json";
import DictionJson from "./diction_structure.json";
import DiscountingJson from "./discounting_structure.json";
import PercentagesJson from "./percentages_structure.json";
import RefinementJson from "./refinement_structure.json";
import TippingJson from "./tipping_structure.json";
import InversionJson from "./inversion_structure.json";
import ProportionJson from "./proportion_structure.json";
import EstimationJson from "./estimation_structure.json";

class QuestionEditor extends Component {
  
  render() {
    let jsonStr = {
      'Agility': AgilityJson,
      'Conversion': ConversionJson,
      'Diction': DictionJson,
      'Discounting': DiscountingJson,
      'Estimation': EstimationJson,
      'Inversion': InversionJson,
      'Proportion': ProportionJson,
      'Purchasing': PurchasingJson,
      'Percentages': PercentagesJson,
      'Refinement': RefinementJson,
      'Tipping': TippingJson,
    }['Refinement']
    let questionObj = this.props.question;
    
    return (
      <Col md={9}>
        <Question questionObj={questionObj} />
        {/* Title */}
        {
          (questionObj.blocks === undefined)?
            null :
            <div>
              {
                questionObj.blocks.map((block) => {
                  return (
                    <Question questionObj={block}/>);
                })
              }
            </div>
        }  
      </Col>
    );
  }
}

export default QuestionEditor;
