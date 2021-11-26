import React, {useState} from 'react';

import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import styled from 'styled-components';

type DataProps = {
  x:any,
  y:any

}
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const StyledPoint = styled.circle`
    fill: ${(props) => props.color};
  `;
  
  const colors = ["#A8E6CE", "#DCEDC2", "#FFD3B5", "#FFAAA6", "#FF8C94"];

  const ScatterPoint = (props:any) => {
    const i = React.useMemo(() => {
      return Math.floor(((props.datum.y - props.min) / (props.max - props.min)) * (colors.length - 1));
    }, [props.datum, props.min, props.max]);
  
    return <StyledPoint color={colors[i]} cx={props.x} cy={props.y} r={6} />;
  };



function Line() {
    
    const data = [
        { x: "Jan", y: 43 },
        { x: "Feb", y: 44 },
        { x: "Mar", y: 47 },
        { x: "Apr", y: 51 },
        { x: "May", y: 57 },
        { x: "Jun", y: 62 },
        { x: "Jul", y: 67 },
        { x: "Aug", y: 68 },
        { x: "Sep", y: 63 },
        { x: "Oct", y: 54 },
        { x: "Nov", y: 47 },
        { x: "Dec", y: 42 }
      ];
      const temperatures = data.map(({ y }:DataProps) => y);
      const min = Math.min(...temperatures);
      const max = Math.max(...temperatures);

  return (
    <VictoryChart>
    <VictoryLine data={data} />
    <VictoryScatter
      data={data}
      dataComponent={<ScatterPoint min={min} max={max} />}
    />
  </VictoryChart>
);

}

export default Line;
