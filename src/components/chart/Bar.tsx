import {bar} from '../../types/ChartType';
import { VictoryAxis, VictoryChart, VictoryBar } from 'victory';
import styled from 'styled-components';

export const Bar = (props:bar) => {
  console.log(props);
  const StyledPoint = styled.circle`
    fill: ${(props) => props.color};
  `;
  return (
 
    <VictoryChart
    // domainPadding will add space to each side of VictoryBar to
    // prevent it from overlapping the axis
    domainPadding={20}
  >
    <VictoryAxis
      // tickValues specifies both the number of ticks and where
      // they are placed on the axis
      tickValues={props.key}
      tickFormat={props.name}
    />
    <VictoryAxis
      dependentAxis
      // tickFormat specifies how ticks should be displayed
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryBar
      data={props.data}
      x={props.x}
      y={props.y}
      style={{
        data: {
          fill: ({ datum }) => {console.log(datum); return datum.earnings >= 10000 ? "#ffff00" : "#c43a31";},
          stroke: ({ index }) => {console.log(index); return +index % 2 === 0  ? "#000000" : "#c43a31";},
          fillOpacity: 0.7,
          strokeWidth: 5
        },
        labels: {
          fontSize: 15,
          fill: ({ datum }:any) => datum.x === 3 ? "#000000" : "#c43a31"
        }
      }}
    />
  </VictoryChart>
  );
}