import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    MenuItem
  } from "react-bootstrap";
import { chaptersFetchData } from '../../store/chapters/actions';
import { gamesFetchData } from '../../store/games/actions';

 class ChapterDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: "Select Chapter" // default selected value
        };
      }
    handleSelect(eventKey, event) {
        this.setState({ selectedOption: this.props.chapters.chapters[eventKey].name });
        this.props.gamesFetchData(this.props.chapters.chapters[eventKey].id);
    }
    render() {
        if (this.props.chapters.hasErrored) {
            return <p>Sorry! There was an error loading the chapters</p>;
        }
        if (this.props.chapters.isLoading) {
            return <DropdownButton title="Loading…" />;
        }
        return (
            <DropdownButton title={this.state.selectedOption} onSelect={this.handleSelect.bind(this)}>
                {("chapters" in this.props.chapters)?
                  this.props.chapters.chapters.map((chapter, i) => (
                      
                        <MenuItem
                            href="#books"
                            key={chapter.id}
                            value={chapter.id}
                            eventKey={i}
                        >
                            {chapter.name}
                        </MenuItem>
                      
                  )) : null
                }
            </DropdownButton>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      chapters: state.chapters
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(chaptersFetchData()),
      gamesFetchData: (chapterId) => dispatch(gamesFetchData(chapterId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChapterDropdown);