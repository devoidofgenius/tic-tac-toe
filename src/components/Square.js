import React from 'react';
import '../css/Square.css';

function Square(props) {
  return(
    <button className="gameSquare" onClick={props.onClick}>{props.value}</button>
  )
}

export default Square;
