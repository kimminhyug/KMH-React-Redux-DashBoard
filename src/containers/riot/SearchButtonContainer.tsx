import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';

import { selectUser,success, init } from '../../modules/search';
import { initList } from '../../modules/list';

import SearchButton from '../../components/SearchButton';
import axios, { AxiosResponse } from 'axios';

function SearchButtonContainer (props:any) {
    
  const dispatch = useDispatch(); 
  const name = useSelector((state: RootState) => state.selector.text);
  
  const dispatchOnSubmit = (e:any) => {
    dispatchListInit();
    dispatch(selectUser(name||'눈덩이맞히면돌격'));
    alert("현재 api key는 기본 api Key로 연속 요청시 api 한도에 걸릴 수 있습니다.(아직 에러 핸들링구현 x)")
  };
    
  const dispatchListInit = () => {
    dispatch(init());
    dispatch(initList());
  };

  return (
    <div className="selectBoxContainer">
      <SearchButton onSubmit={dispatchOnSubmit} text={props.text}></SearchButton>
        
    </div>
  );
};

export default SearchButtonContainer;
