import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

import { change } from '../modules/selector';
import SelectBox from '../components/SelectBox';


function SelectBoxContainer (props:any) {
    
    const onChange = useSelector((state: RootState) => state.selector);
    const state = useSelector((state: RootState) => state);
    // console.log(state)
    const dispatch = useDispatch(); 
  
    
    const dispatchOnChange = (e:any) => {
      dispatch(change({onChange:props.onChange(e), text : e.target.value}));
    };
    
    
  return (
    <div className="selectBoxContainer">
      <SelectBox onChange={dispatchOnChange}></SelectBox>
        
    </div>
  );
};

export default SelectBoxContainer;
