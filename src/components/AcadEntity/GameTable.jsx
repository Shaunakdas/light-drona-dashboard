import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    Table,
    Button
  } from "react-bootstrap";
import { gamesFetchData } from '../../store/games/actions';

 class GameTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: "Select Game" // default selected value
        };
      }
    handleSelect(eventKey, event) {
        this.setState({ selectedOption: this.props.games.game_holders[eventKey].name });
    }
    render() {
        console.log('Triggered',this.props);
        if (this.props.games.hasErrored) {
            return <p>Sorry! There was an error loading the games</p>;
        }
        if (this.props.games.isLoading) {
            return <DropdownButton title="Loading…" />;
        }
        console.log(this.props);
        return (
            // <DropdownButton title={this.state.selectedOption} onSelect={this.handleSelect.bind(this)}>
            //     {("games" in this.props.games)?
            //       this.props.games.game_holders.map((game, i) => (
                      
            //             <MenuItem
            //                 href="#books"
            //                 key={game.id}
            //                 value={game.id}
            //                 eventKey={i}
            //             >
            //                 {game.name}
            //             </MenuItem>
                      
            //       )) : null
            //     }
            // </DropdownButton>
            <Table striped hover>
                <thead>
                <tr>
                    <th key={'Sequence'}>{'Sequence'}</th>
                    <th key={'Title'}>{'Title'}</th>
                    <th key={'Type'}>{'Type'}</th>
                    <th key={'Id'}>{'Id'}</th>
                </tr>
                </thead>
                <tbody>
                {("games" in this.props.games)?
                  this.props.games.games.map((game, i) => (
                    <tr key={game.id}>
                        <td key={game.sequence}>{game.sequence}</td>
                        <td key={game.title}>{game.title}</td>
                        <td key={game.game.name}>{game.game.name}</td>
                        <td key={game.id}>{game.id}</td>
                        <td key={"key"}>
                            <Button bsStyle="info" fill type="submit">
                                <i className="pe-7s-more" />
                            </Button>
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
      games: state.games
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(gamesFetchData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameTable);