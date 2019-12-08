import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    Table,
    MenuItem
  } from "react-bootstrap";
import { questionsFetchData } from '../../store/questions/actions';

 class QuestionTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: "Select Question" // default selected value
        };
      }
    handleSelect(eventKey, event) {
        this.setState({ selectedOption: this.props.questions.question_holders[eventKey].name });
    }
    render() {
        if (this.props.questions.hasErrored) {
            return <p>Sorry! There was an error loading the questions</p>;
        }
        if (this.props.questions.isLoading) {
            return <DropdownButton title="Loading…" />;
        }
        console.log(this.props);
        return (
            <Table striped hover>
                <thead>
                <tr>
                    <th key={'Id'}>{'Id'}</th>
                    <th key={'Sequence'}>{'Sequence'}</th>
                    <th key={'Title'}>{'Title'}</th>
                </tr>
                </thead>
                <tbody>
                {("questions" in this.props.questions)?
                  this.props.questions.questions.map((question, i) => (
                    <tr key={question.id}>
                        <td key={question.id}>{question.id}</td>
                        <td key={question.id}>{'-'}</td>
                        <td key={question.question}>{question.question}</td>
                        <td key={"key"}>
                            <DropdownButton title="Edit">
                                <MenuItem eventKey={2.1}>Action</MenuItem>
                                <MenuItem eventKey={2.1}>Another Action</MenuItem>
                                <MenuItem divider />
                            </DropdownButton>
                        </td>
                    </tr>
                    )) : null
                }
                
                </tbody>
            </Table>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      questions: state.questions
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(questionsFetchData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionTable);