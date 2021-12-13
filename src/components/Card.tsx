import React from 'react';
import '../scss/Card.scss';
import ChartContainer from '../containers/ChartContainer';





function Card(props:any) {
  return (
    <div className="Card"> 
      {props.children}
    </div>
  );
}

export default Card;
