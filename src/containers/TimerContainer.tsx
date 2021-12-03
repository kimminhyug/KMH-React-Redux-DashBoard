import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import { increase } from '../modules/timer';
import Timer from '../components/Timer';


function TimerContainer (props:any) {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  
  
  
  const calcTime = (time:Number) => {
    let result = {
      h: Math.floor(+time/3600), 
      m: Math.floor((+time%3600)/60),
      s: +(+time % 60).toFixed(0)
    };
    result.h = (result.h>0)?result.h:0;
    result.m = (result.m>0)?result.m:0;
    result.s = (result.s>0)?result.s:0;
    return result;
      
  }
  

  
  return (
    
    <Timer

    endTime={props.endTime}
    onIncrease={calcTime}
    ></Timer>
  );
};

export default TimerContainer;
