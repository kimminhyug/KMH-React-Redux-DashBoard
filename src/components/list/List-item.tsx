import React, { useEffect } from 'react';
import '../../scss/List.scss';

import '../../scss/Champion.scss';




type listProps = {
  championId: string,
  user: string,
  data:any,
  championPicture:string
}


// for(let i=0;i<temp1.length;i++) {
//     let members = temp1[i];//participants

//     if(members.puuid=="kjvar71-t4puay-X8ABwa4PZxPJY7vTgCM0MkTJrM2QhYqIdeBSfjjO-LzLwyHZrO0wzo6WhaIm1IA"){
//     user =  members;
//     break;   
//     }
    
// }

function ListItem(props:listProps) {
  let match = null;
  
  // console.log(props);
  const getSelectorUserInfo = (data:any, puuid:String) => {
    let member;
    // console.log(data);
    if(!data) return;
    for(let i=0;i<data.info.participants.length;i++) {
        let participants = data.info.participants[i];//participants
        if(participants.puuid=== puuid){
          member = participants;
          break;   
        }
    }
    return member;
  }
  useEffect(()=>{
    let data = props?.data;
    match = getSelectorUserInfo(data, props.user);
    // console.log(props.data.metadata)
    // championPicture = 'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/'+match.championName+'.png';
    console.log(match);
    // match.win
    // console.log(championPicture)
  })
  return (
    <div className="ListItem"> 
      <div className="Champion-Header">
        <img src={props.championPicture||'error.png'}></img><br/>
        <span>{props.championId}</span>
      </div>
      
      
      {/* {props.user} */}
      
    </div>
  );
}

export default ListItem;
