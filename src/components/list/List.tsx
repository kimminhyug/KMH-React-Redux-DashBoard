import React, {useEffect, useState} from 'react';
import '../../scss/List.scss';
import ListItem from './List-item'
import { RootState } from '../../modules';
import { useSelector, useDispatch  } from 'react-redux';
import { add } from '../../modules/list';
import { getMatchList, getMatchInfo, getMatchInfoByIdArr } from '../../modules/search';



function List(props:any) {
  const items = useSelector((state: RootState) => state.list);
  const rs = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch(); 
  
  const dispatchInsert = (props:any) => {
    // console.log(props);
    dispatch(add({data:props.data, championId: props.championId, user:props.user, championPicture:props.championPicture}));
  };

  /**
   * 테스트
   */
  useEffect(()=>{
      setTimeout(() => {
          // dispatchInsert({data:null,championId:'가렌', user:'눈덩이'});
      }, 2000);
  },[]);

  /**
   * puuid 업데이트시 matchList 가져오기
   */
  useEffect(()=>{
    if(!rs.puuid) return;
    dispatch(getMatchList(rs.puuid));
  },[rs.puuid]);

  /**
   * matchList 업데이트시 matchInfo 가져오기
   */
  useEffect(()=>{
    const matchLength = rs.matchList.length;
    // for(let i=0; i<matchLength; i++) {
    //   console.log(rs.matchList);
    //   if(rs.matchList.length == 0) return;
    //   dispatch(getMatchInfo(rs.matchList[i]));
      
    // }
    
    dispatch(getMatchInfoByIdArr(rs.matchList));
  },[rs.matchList]);

  /**
   * matchInfo 업데이트시 화면에 렌더링
   */
  useEffect(()=>{
    if(rs.matchCount<=0) return;
    const data = rs.matchInfo[+rs.matchCount-1];
    const {gameId, gameDuration} = data.info;
    let match = getSelectorUserInfo(data, rs.puuid);
    console.log(match);
    let championPicture = 'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/'+match.championName+'.png';
    dispatchInsert({data:data ,championId:match.championName  , user:rs.puuid, championPicture:championPicture});  
    // console.log(data);
  },[rs.matchCount]);

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

  return (
    <div className="List"> 
      
        {items.map((item,i) => (
            <ListItem championPicture={item.championPicture} data={item.data} championId={item.championId} user={item.user} key={i}></ListItem>
        ))}
    </div>
  );
}

export default List;
