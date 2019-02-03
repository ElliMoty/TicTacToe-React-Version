import React from 'react';

//we do not need to worry about this in function component!
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;

