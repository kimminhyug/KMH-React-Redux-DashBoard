import React, { EventHandler, HTMLAttributes, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';
import '../../scss/List.scss';
import '../../scss/Champion.scss';


function ListItemContentHeader() {
  const testOnclick = (e:React.MouseEvent<HTMLElement>) => {
    console.log(e);
    alert((e.target as HTMLDivElement).textContent)
  }
  return (
    <div className='list-item-content-header'>
      <div className='list-item-content-header-tab' onClick={testOnclick}>탭 1</div>
      <div className='list-item-content-header-tab' onClick={testOnclick}>탭 2</div>
      <div className='list-item-content-header-tab' onClick={testOnclick}>탭 3</div>
    </div>
  );
}

export default ListItemContentHeader;
