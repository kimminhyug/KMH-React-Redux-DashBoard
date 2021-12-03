import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import { change } from '../modules/selector';
import SelectBox from '../components/SelectBox';


function SelectBoxContainer (props:any) {
    
    // const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch(); 
  
    
    const onChange = (y:any) => {
      dispatch(change(y));
    };
    
  return (
    <div className="selectBoxContainer">
      <SelectBox onChange={onChange}></SelectBox>
        
    </div>
  );
};

export default SelectBoxContainer;
