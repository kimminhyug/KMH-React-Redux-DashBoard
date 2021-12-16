import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import { selectUser,success } from '../modules/search';

import SearchButton from '../components/SearchButton';
import axios, { AxiosResponse } from 'axios';

function SearchButtonContainer (props:any) {
    
    // console.log(state  )
    const dispatch = useDispatch(); 
  
    const dispatchOnSubmit = (e:any) => {
      dispatch(selectUser('눈덩이맞히면돌격'));
    };
    
    
  return (
    <div className="selectBoxContainer">
      <SearchButton onSubmit={dispatchOnSubmit} text={props.text}></SearchButton>
        
    </div>
  );
};

export default SearchButtonContainer;
