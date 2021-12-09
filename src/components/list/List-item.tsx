import React from 'react';
import '../../scss/List.scss';




type listProps = {
  championId: string,
}

function ListItem(props:listProps) {
  return (
    <div className="ListItem"> 
      {props.championId}
    </div>
  );
}

export default ListItem;
