import React from 'react';
import CounterContainer from './containers/CounterContainer';
import CardContainer from './containers/CardContainer';
import ChartContainer from './containers/ChartContainer';
import TimerContainer from './containers/TimerContainer';
import ProfileContainer from './containers/ProfileContainer';
import ProfileContentContainer from './containers/ProfileContentContainer';

const App: React.FC = () => {
  let t = (+new Date().setHours(17,0,0,0) - +new Date())/1000;
  var time = {
    h: Math.floor(t/3600), 
    m: Math.floor((t%3600)/60),
    s: (t % 60).toFixed(0)
  }

  let tt = (+new Date().setHours(18,0,0,0) - +new Date())/1000;
  var time2 = {
    h: Math.floor(tt/3600), 
    m: Math.floor((tt%3600)/60),
    s: (tt % 60).toFixed(0)
  }

  let ttt = (+new Date().setHours(18,30,0,0) - +new Date())/1000;
  var time3 = {
    h: Math.floor(ttt/3600), 
    m: Math.floor((ttt%3600)/60),
    s: (ttt % 60).toFixed(0)
  }

  return <div className="App">
    <div className="Header">
      <div className="Header-content">
        <div className="Logo">
          
        </div>
        <div className="selectBoxContainer">
        <input className="form-control form-control-light" type="text" placeholder="Search" ></input>
        </div>
        <div className="profileContainer">
          <ProfileContainer url="../image/profile.jpg "></ProfileContainer>
          <ProfileContentContainer name="김민혁"></ProfileContentContainer>
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
      </div>
    </div>
  </div>
  
     
    
  
};

export default App;
