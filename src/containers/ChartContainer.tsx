import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';


import {Bar} from '../components/chart/Bar';

import {chart, ChartType} from '../types/ChartType';


function ChartContainer (props:any) {
  
  let nameArr:string[] = [];
  let keyArr:any = [];
  props.chart.data.map((data:any)=>{
    let key = data[props.chart.x];
    nameArr.push(data.name);
    if(key){keyArr.push(key)}
  })
  
  console.log(nameArr);
  // const data = [
  //   {quarter: 1, earnings: 13000},
  //   {quarter: 2, earnings: 16500},
  //   {quarter: 3, earnings: 14250},
  //   {quarter: 4, earnings: 19000}
  // ];
  
  // switch (props.type) {
  //   case ChartType.BAR:
      
  //     break;
  
  //   default:
  //     break;
  // }
  
  return (
    <div className="Chart">

    
      {/* <Chart/> */}
      <Bar type={props.chart.type} data={props.chart.data} name={nameArr} key={keyArr} x={props.chart.x} y={props.chart.y}></Bar>
    </div>
  );
};

export default ChartContainer;
