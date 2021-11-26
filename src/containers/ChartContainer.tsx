import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import Chart from '../components/BarChart';
import {Bar} from '../components/chart/Bar';

import {chart, ChartType} from '../types/ChartType';


function ChartContainer (props:any) {
  console.log(props.chart);
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
      <Bar type={props.chart.type} data={props.chart.data}></Bar>
    </div>
  );
};

export default ChartContainer;
