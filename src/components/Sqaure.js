import React from 'react';
import "../App.css";
function Square({val,chooseSqaure}){
  return (
    <div className="square" onClick={chooseSqaure}>{val}</div>
  )
}

export default Square;