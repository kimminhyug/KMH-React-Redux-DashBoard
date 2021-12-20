import React, {useEffect, useState} from 'react';
import '../../scss/List.scss';
import ListItem from './List-item'
import { RootState } from '../../modules';
import { useSelector, useDispatch  } from 'react-redux';
import { add } from '../../modules/list';

function List() {
  const items = useSelector((state: RootState) => state.list);
  const rs = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch(); 
  
  const dispatchInsert = (props:any) => {
    dispatch(add({ match:props.match, userInfo:props.userInfo}));
  };

  /**
   * matchInfo 업데이트시 화면에 렌더링
   */
  useEffect(()=>{
    if(rs.matchCount<=0) return;

    const data = rs.match[+rs.matchCount-1];
    let info = getSelectorUserInfo(data, rs.puuid);
    
    if(!info) return;

    //검색결과 삽입.
    dispatchInsert({match:data, userInfo:info});  
  },[rs.matchCount]);

  /**
   * 현재매치에서 파라미터로 들어온 puuid 플레이어의 매치전적을 가져옴(ex kda, champion)
   * @param data 
   * @param puuid 
   * @returns MatchPlayerInfo
   */
  const getSelectorUserInfo = (data:any, puuid:String) => {
    let member;
    
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
            <ListItem match={item.match} userInfo={item.userInfo} key={i}></ListItem>
        ))}
    </div>
  );
}

export default List;
