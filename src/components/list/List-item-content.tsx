import React, { HTMLAttributes, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';
import CardContainer from '../../containers/CardContainer';
import ChartContainer from '../../containers/ChartContainer';

import {lineProps1} from '../../data/lineData';

import '../../scss/List.scss';
import '../../scss/Champion.scss';


function ListItemContent() {
 
  return (
    <div className='list-item-content'>
      <div className='tab-chart'>
            <ChartContainer chart={lineProps1}/>
      </div>
    </div>
  );
}

export default ListItemContent;
