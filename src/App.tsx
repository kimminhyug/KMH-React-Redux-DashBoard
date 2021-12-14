import React, {useEffect, useState} from 'react';
import CounterContainer from './containers/CounterContainer';
import CardContainer from './containers/CardContainer';
import ChartContainer from './containers/ChartContainer';
import TimerContainer from './containers/TimerContainer';
import ProfileContainer from './containers/ProfileContainer';
import ProfileContentContainer from './containers/ProfileContentContainer';
import ProfileAuthContainer from './containers/ProfileAuthContainer';
import SelectBoxContainer from './containers/SelectBoxContainer';
import SearchButtonContainer from './containers/SearchButtonContainer';

import GridContainer from './containers/Grid/GridContainer';
import ListContainer from './containers/ListContainer';

import {barProps1, barProps2, barProps3} from './data/barData';
import {lineProps1} from './data/lineData';

//임시 데이터
import tableDataItems from './data/gridData';

//라이브러리
import axios, { AxiosResponse } from 'axios';


import './scss/header.scss';

  // const barData = [
  //   {sequence: 1, earnings: 13000 ,name:"데이터1"},
  //   {sequence: 2, earnings: 16500 ,name:"데이터2"},
  //   {sequence: 3, earnings: 14250 ,name:"데이터3"},
  //   {sequence: 4, earnings: 19000 ,name:"데이터4"}
  // ];

  // const barData2 = [
  //   {sequence: 1, earnings: 19000 ,name:"데이터1"},
  //   {sequence: 2, earnings: 16500 ,name:"데이터2"},
  //   {sequence: 3, earnings: 4500 ,name:"데이터3"},
  //   {sequence: 4, earnings: 9900 ,name:"데이터4"}
  // ];

  // const barData3 = [
  //   {sequence: 1, earnings: 3222 ,name:"데이터1"},
  //   {sequence: 2, earnings: 8996 ,name:"데이터2"},
  //   {sequence: 3, earnings: 5662 ,name:"데이터3"},
  //   {sequence: 4, earnings: 13000 ,name:"데이터4"}
  // ];
const App: React.FC = () => {
  // useEffect(() => {
  //   document.title = "KMH-DashBoard"
  // }, []);

  // let selectValue = "";
  const onSubmit = ()=>{
    
    let response = axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/눈덩이맞히면돌격?api_key=RGAPI-f6fa3a26-d60c-4ed3-a442-0668ede41606').then(response => {
      console.log(response);
      alert(response.data.puuid)
    });
    return response;
  }
  return <div className="App">
    <div className="Header">
      <div className="Header-content">
        <div className="Logo">
          
        </div>
        <SelectBoxContainer onChange={(e:Event)=>{
          console.log((e.target as HTMLInputElement).value);
        
        }}></SelectBoxContainer >
        {/* <button onClick={onSubmit}>riot puuid 조회(테스트)</button> */}
        <SearchButtonContainer onSubmit={onSubmit} text={"riot puuid 조회('눈덩이맞히면 돌격'으로 고정_테스트)"}></SearchButtonContainer>
        <div className="profileContainer">
          <ProfileContainer url="../image/profile.jpg "></ProfileContainer>
          <div>
          <ProfileContentContainer name="김민혁"></ProfileContentContainer>
          <ProfileAuthContainer name="관리자"></ProfileAuthContainer>
          </div>
        </div>
        </div>
      </div>
      
    <div className="DashBoard">
      <div className="DashBoard-Content">
        <div className="timerContainer cardContainer">
          <TimerContainer endTime={new Date().setHours(17,0,0,0)}></TimerContainer>
        </div>
        <div className="timerContainer cardContainer">
          <TimerContainer endTime={new Date().setHours(18,0,0,0)}></TimerContainer>
        </div>
        <div className="timerContainer cardContainer">
          <TimerContainer endTime={new Date().setHours(18,30,0,0)}></TimerContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer chart={lineProps1}/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer chart={barProps1}/>
          </CardContainer>
        </div>
        
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer chart={barProps2}/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <CounterContainer></CounterContainer>
          </CardContainer>
        </div>
        {/* <div className="container cardContainer">
          <CardContainer>
            <ChartContainer chart={barProps3}/>
          </CardContainer>
        </div> */}

        <div className="container-4 cardContainer">
          <CardContainer>
            <ListContainer></ListContainer>
          </CardContainer>
        </div>

        <div className="container-4">
          <CardContainer>
            <GridContainer
              data={tableDataItems}
            />
          </CardContainer>
        </div>
     
      </div>
    </div>
  </div>
  
     
    
  
};

export default App;
