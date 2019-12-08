import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    Table,
    MenuItem
  } from "react-bootstrap";
import { questionsFetchData } from '../../store/questions/actions';

 class QuestionTable extends Component {
    render() {
        if (this.props.questions.hasErrored) {
            return <p>Sorry! There was an error loading the questions</p>;
        }
        if (this.props.questions.isLoading) {
            return <p>Loading ...</p>;
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
                                <MenuItem href="game/edit" eventKey={2.1}>Open</MenuItem>
                                <MenuItem eventKey={2.1}>Move</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.1}>Delete</MenuItem>
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