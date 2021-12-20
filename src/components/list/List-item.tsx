import React, { useEffect } from 'react';
import '../../scss/List.scss';
import '../../scss/Champion.scss';

import { Match } from '../../types/riot/Match';
import { MatchPlayerInfo } from '../../types/riot/MatchPlayerInfo';

type listProps = {
  match:Match,
  userInfo:any
}

const getChampionPicture = (championName:string) => {
  return 'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/'+ championName + '.png';
}

function ListItem(props:listProps) {
  const championPicture =  getChampionPicture(props.userInfo.championName);
  let teams:any={};

  const filterTeamInMatchInfo = (participants:MatchPlayerInfo[]) => {
    participants.forEach((item : MatchPlayerInfo)=>{
        let{championName, summonerName} = item;
        let data:any  = {
          summonerName : summonerName,
          championName : championName
        };
        teams[item.teamId] = [...teams[item.teamId]||[], data]
    });
  };

  filterTeamInMatchInfo(props.match.info.participants);

  const renderingTeam = (id:string) => {
    let renderData = [];
    let teamHeader:any = {};

    for(var teamId in teams) {
      if(teamId !== id) continue;
      if(!teamHeader[teamId]) {
        
        renderData.push(<b><span className={teamId}>{(teamId == "100")?"Blue Team":"Red Team"}</span></b> );  
        teamHeader[teamId] = true;
        renderData.push(<br/>);  
      }
      for(var i=0; i < teams[teamId].length; i++) {
        let {summonerName, championName} = teams[teamId][i];
        
        renderData.push(<div className='Team-List'>
          <img className="Thumb-Mini" src={getChampionPicture(championName)} title={championName} alt={championName} ></img>
          <span className={teamId}>{summonerName}</span>
          <br/>
        </div>);
      } 
    }
    return renderData;
  }

  

  return (
    <div className={props.userInfo.win?"List-Item Win":"List-Item Lose"}> 
      <div className="Champion-Header">
        <img src={championPicture||'error.png'} title={props.userInfo.championName} alt={props.userInfo.championName} ></img> <br/>
        <span>{props.userInfo.championName}</span>
      </div>

      <div className="Champion-kda">
        <span> {props.userInfo.kills} /</span> 
        <span> {props.userInfo.deaths} /</span>
        <span> {props.userInfo.assists} </span> <br/>
        <span> {props.userInfo.win?'승리':'패배'} </span>
      </div>

      <div className="Champion-css">
        <span> 미니언 : {props.userInfo.totalMinionsKilled}</span> <br/>
        <span> 정글  : {props.userInfo.neutralMinionsKilled}</span> <br/>
        <span> 총 CS : {props.userInfo.totalMinionsKilled + props.userInfo.neutralMinionsKilled}</span> 
      </div>

      <div className="Team">
        {renderingTeam("100")}
      </div>

      <div className="Team">
        {renderingTeam("200")}
      </div>
    </div>
  );
}

export default ListItem;
