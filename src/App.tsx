import React from 'react';
import CounterContainer from './containers/CounterContainer';
import CardContainer from './containers/CardContainer';
import ChartContainer from './containers/ChartContainer';
import TimerContainer from './containers/TimerContainer';
import ProfileContainer from './containers/ProfileContainer';
import ProfileContentContainer from './containers/ProfileContentContainer';
import ProfileAuthContainer from './containers/ProfileAuthContainer';



import Line from './components/chart/Line';

import './scss/header.scss';
  const barData = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
const App: React.FC = () => {
  
  const barProps = {
    data : barData,
    type: "Bar"
  }
  return <div className="App">
    <div className="Header">
      <div className="Header-content">
        <div className="Logo">
          
        </div>
        <div className="selectBoxContainer">
        <input className="selectBox form-control form-control-light" type="text" placeholder="Search" ></input>
        </div>
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
          <div className="Chart">
          
            <Line/>
            </div>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer chart={barProps}/>
          </CardContainer>
        </div>
        

        {/* <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer>
        </div>
        <div className="container cardContainer">
          <CardContainer>
            <ChartContainer/>
          </CardContainer> */}
        {/* </div> */}
      </div>
    </div>
  </div>
  
     
    
  
};

export default App;
