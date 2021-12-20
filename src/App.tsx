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

import './scss/header.scss';


const App: React.FC = () => {

  return <div className="App">
    <div className="Header">
      <div className="Header-content">
        <div className="Logo">
          
        </div>
        <SelectBoxContainer onChange={(e:Event)=>{
          console.log((e.target as HTMLInputElement).value);

        }}></SelectBoxContainer >
        {/* <button onClick={onSubmit}>riot puuid 조회(테스트)</button> */}
        <SearchButtonContainer text={"리그오브레전드 전적조회(좌측 검색창에 닉네임입력 후 조회_기본값 눈덩이맞히면돌격)"}></SearchButtonContainer>
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
