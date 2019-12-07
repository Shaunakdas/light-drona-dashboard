import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    MenuItem
  } from "react-bootstrap";
import { standardsFetchData } from '../../actions/standards';

 class StandardDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: "Select Standard" // default selected value
        };
      }
    componentDidMount() {
      this.props.fetchData('http://localhost:3000/api/v1/standards');
    }
    handleSelect(eventKey, event) {
        this.setState({ selectedOption: "Standard "+this.props.standards.standards[eventKey].name });
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the standards</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
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
      standards: state.standards,
      hasErrored: state.standardsHasErrored,
      isLoading: state.standardsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(standardsFetchData(url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StandardDropdown);