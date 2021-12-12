import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import { submitAsync } from '../modules/search';

import SearchButton from '../components/SearchButton';


function SearchButtonContainer (props:any) {
    
    
    
    // console.log(state  )
    const dispatch = useDispatch(); 
  
    
    const dispatchOnSubmit = (e:any) => {
      dispatch(submitAsync(1));
    };
    
    
  return (
    <div className="selectBoxContainer">
      <SearchButton onSubmit={dispatchOnSubmit} text={props.text}></SearchButton>
        
    </div>
  );
};

export default SearchButtonContainer;
