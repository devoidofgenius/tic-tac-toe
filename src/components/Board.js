import React from 'react';
import Square from './Square';
import { calculateWinner } from '../helpers';
import '../css/Board.css';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xTurn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  renderGameSquare(i) {
    return <Square onClick={() => this.handleClick(i)} value={this.state.squares[i]} />;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xTurn ? 'X' : 'O';
    this.setState({
      squares: squares,
      xTurn: !this.state.xTurn
    });
    console.log("clicked");
  }

  emptySpaces() {
    return this.state.squares.map((square) => square === null ? "?" : square);
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    if (winner) {
      alert("WINNER");
    }
    return(
      <div>
        <div className="row">
          {this.renderGameSquare(0)}
          {this.renderGameSquare(1)}
          {this.renderGameSquare(2)}
        </div>
        <div className="row">
          {this.renderGameSquare(3)}
          {this.renderGameSquare(4)}
          {this.renderGameSquare(5)}
        </div>
        <div className="row">
          {this.renderGameSquare(6)}
          {this.renderGameSquare(7)}
          {this.renderGameSquare(8)}
        </div>
        <h1>{this.emptySpaces()}</h1>
      </div>
    )
  }
}

export default Board;
