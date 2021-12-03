import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import { childInsert } from '../modules/card';
import Card from '../components/Card';


function CardContainer (props:any) {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  
  const card = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  
  // console.log(dispatch(childInsert))
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onChildInsert = () => {
    dispatch(childInsert());
  };

 

  
  const cardSize = {
    width : 100,
    height : 100
  }
  console.log(props.children)
  return (
    <Card children={props.children}></Card>
  );
};

export default CardContainer;
