import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    MenuItem
  } from "react-bootstrap";
import { standardsFetchData } from '../../actions/standards';

 class StandardDropdown extends Component {
    componentDidMount() {
      this.props.fetchData('http://localhost:3000/api/v1/standards');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the standards</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        console.log(this.props);
        return (
            <DropdownButton title="Select Standard">
                {("standards" in this.props.standards)?
                  this.props.standards.standards.map((standard) => (
                      
                        <MenuItem
                            href="#books"
                            key={standard.id}
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