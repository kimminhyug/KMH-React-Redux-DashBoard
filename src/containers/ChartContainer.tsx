import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import Chart from '../components/Chart';

function ChartContainer () {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다


  return (
    <Chart/>
  );
};

export default ChartContainer;
