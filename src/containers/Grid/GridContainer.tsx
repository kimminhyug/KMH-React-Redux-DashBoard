import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';

import Grid, { GridProps } from '../../components/grid/Grid';

import { insert } from '../../modules/grid';

type GridContainerProps = {
  data:any[]
}

function GridContainer (props:GridContainerProps) {
  
  const data = useSelector((state: RootState) => state.grid.data);
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch(); 
  
  
  const dispatchInsert = () => {
    dispatch(insert(props));
  };
  

  return (
    <div className="Grid">
      <Grid
        onInit = {dispatchInsert}
        data={data}
        // data = {props.data}
      />
      
    </div>
  );
};

export default GridContainer;


// temp1.data.filter((e)=>{
//   if(e.name.indexOf("Fr") != -1) {return true} else {return false} 
// })