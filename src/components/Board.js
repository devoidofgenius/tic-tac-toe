import React from 'react';
import Square from './Square';
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
    squares[i] = this.state.xTurn ? 'X' : 'O';
    this.setState({
      squares: squares,
      xTurn: !this.state.xTurn
    });
    console.log("clicked");
  }

  render() {
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
      </div>
    )
  }
}

export default Board;
