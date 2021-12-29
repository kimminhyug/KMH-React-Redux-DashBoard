import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';


import {Bar} from '../components/chart/Bar';
import Line from '../components/chart/Line';

import {chart, ChartType} from '../types/ChartType';

import '../scss/chart.scss';
function ChartContainer (props:any) {
  
  let nameArr:string[] = [];
  let keyArr:any = [];
  props.chart.data.map((data:any)=>{
    let key = data[props.chart.x];
    nameArr.push(data.name);
    if(key){keyArr.push(key)}
  })
  
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
  
  const getChart = (chartName:String) => {
    
    switch(chartName.toUpperCase()) {
      case "BAR":   return <Bar type={props.chart.type} data={props.chart.data} name={nameArr} key={keyArr} x={props.chart.x} y={props.chart.y}/>;
      case "LINE":   return <Line type={props.chart.type} data={props.chart.data} name={nameArr} key={keyArr} x={props.chart.x} y={props.chart.y}/>;
      default:      return <h1>No project match</h1>
    }
  }

  return (
    <div className="Chart">

    {getChart(props.chart.type)}
      {/* <Chart/> */}
      {/* <Bar type={props.chart.type} data={props.chart.data} name={nameArr} key={keyArr} x={props.chart.x} y={props.chart.y}></Bar> */}
      {/* <Line type={props.chart.type} data={props.chart.data} name={nameArr} key={keyArr} x={props.chart.x} y={props.chart.y}></Line> */}
    </div>
  );
};

export default ChartContainer;
