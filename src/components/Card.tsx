import React from 'react';
import '../scss/Card.scss';
import ChartContainer from '../containers/ChartContainer';

import Chart from './Chart';
type CardProps = {
  chart: typeof Chart
}




function Card(props:any) {

console.log(props);
  return (
    <div className="Card"> 
      {props.children}
    </div>
  );
}

export default Card;
