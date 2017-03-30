import React from 'react';
import Board from './Board';
import '../css/TicTacToe.css';

class TicTacToe extends React.Component {
  render() {
    return(
      <div className="app-wrapper">
        <div className="board">
          <Board />
        </div>
      </div>
    )
  }
}

export default TicTacToe;
