import React, { useEffect } from 'react';
import '../../scss/List.scss';

import '../../scss/Champion.scss';
import { MatchInfo } from '../../types/riot/MatchInfo';




type listProps = {
  championId: string,
  user: string,
  data:any,
  championPicture:string,
  match:MatchInfo,
  userInfo:any
}


// for(let i=0;i<temp1.length;i++) {
//     let members = temp1[i];//participants

//     if(members.puuid=="kjvar71-t4puay-X8ABwa4PZxPJY7vTgCM0MkTJrM2QhYqIdeBSfjjO-LzLwyHZrO0wzo6WhaIm1IA"){
//     user =  members;
//     break;   
//     }
    
// }

function ListItem(props:listProps) {
  let match = props.data;

  useEffect(()=>{
    let data = props;

  })
  return (
    <div className="ListItem"> 
      <div className="Champion-Header">
        <img src={props.championPicture||'error.png'}></img><br/>
        <span>{props.championId}</span>
      </div>
      <div className="Champion-kda">
        <span> {props.userInfo.kills} /</span> 
        <span> {props.userInfo.deaths} /</span>
        <span> {props.userInfo.assists} </span><br/>
        <span> {props.userInfo.win?'승리':'패배'} </span>
      </div>
      
      
      {/* {props.user} */}
      
    </div>
  );
}

export default ListItem;
