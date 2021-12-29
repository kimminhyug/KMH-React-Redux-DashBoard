import React, { HTMLAttributes, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';
import '../../scss/List.scss';
import '../../scss/Champion.scss';

import { Match } from '../../types/riot/Match';
import { MatchPlayerInfo } from '../../types/riot/MatchPlayerInfo';
import ListItemContentHeader from './List-item-content-header';
import ListItemContent from './List-item-content';

type listProps = {
  match:Match,
  userInfo:any
}


function ListItemContentContainer(props:listProps) {

  return (
    <div className='list-item-content-container'>
      <ListItemContentHeader></ListItemContentHeader>
      <ListItemContent></ListItemContent>
    </div>
  );
}

export default ListItemContentContainer;
