import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    MenuItem
  } from "react-bootstrap";
import { standardsFetchData } from '../../store/standards/actions';
import { chaptersFetchData } from '../../store/chapters/actions';

 class StandardDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: "Select Standard" // default selected value
        };
      }
    componentDidMount() {
      this.props.fetchData();
    }
    handleSelect(eventKey, event) {
        this.setState({ selectedOption: "Standard "+this.props.standards.standards[eventKey].name });
        this.props.fetchChaptersData(this.props.standards.standards[eventKey].id);
    }
    render() {
        if (this.props.standards.hasErrored) {
            return <p>Sorry! There was an error loading the standards</p>;
        }
        if (this.props.standards.isLoading) {
            return <DropdownButton title="Loading…" />;
        }
        return (
            <DropdownButton title={this.state.selectedOption} onSelect={this.handleSelect.bind(this)}>
                {("standards" in this.props.standards)?
                  this.props.standards.standards.map((standard, i) => (
                      
                        <MenuItem
                            href="#books"
                            key={standard.id}
                            value={standard.id}
                            eventKey={i}
                        >
                            Standard {standard.name}
                        </MenuItem>
                      
                  )) : null
                }
            </DropdownButton>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      standards: state.standards
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(standardsFetchData()),
      fetchChaptersData: (standard_id) => dispatch(chaptersFetchData(standard_id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StandardDropdown);