import React, { createElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';

import Grid, { GridProps } from '../../components/grid/Grid';

import { insert, select } from '../../modules/grid';

type GridContainerProps = {
  data:any[]
}

function GridContainer (props:GridContainerProps) {
  
  const data = useSelector((state: RootState) => state.grid.data);
  const selectValue = useSelector((state: RootState) => state.selector.text);
  
  const dispatch = useDispatch(); 
  
  
  const dispatchInsert = () => {
    dispatch(insert({data : props.data}));
  };
  
  const dispatchSelect = (data:any) => {
    console.log(data);
    dispatch(select({data:data}));
  };

  useEffect(() => {
    dispatchInsert();
  },[]);
  
  useEffect(() => {
		if(!selectValue) {
      dispatchSelect(props.data);
      return;
    }    
		var a = props.data.filter((row)=>{
			console.log(row);
			// if(!selectValue) return false;
			if(row.name.toLowerCase().indexOf(selectValue.toLowerCase()) != -1) {
			  return true;
			} else {
			  return false;
			}
		})
    console.log(a);
		dispatchSelect(a);
		console.log(data);
	},[selectValue]);	

  return (
    <div className="Grid">
      <Grid
        onInit = {dispatchInsert}
        onSelect = {dispatchSelect}
        selectValue = {selectValue}
        data={data}
        // data = {props.data}
      />
      
    </div>
  );
};

export default GridContainer;

