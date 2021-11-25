import React, {useState} from 'react';
import '../scss/Card.scss';
type Result = {
  h: number;
  m: number;
  s: number;
}
type TimerProps = {


  endTime: number;
  onIncrease: (diff:number) => Result;
  
}





function Timer({
  
  endTime,
  onIncrease,
  
}: TimerProps) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [currentTime, setCurrentTime] = useState(endTime);

  
  let printDate = 
    new Date().getFullYear() + "년"
    + (new Date().getMonth() + 1) + "월"
    + new Date().getDate() + "일 " 
    + new Date(currentTime).getHours() +"시"
    + new Date(currentTime).getMinutes() + "분" 
    + new Date(currentTime).getSeconds() + "초";
  const loop = ()=>{
    setInterval(()=>{
      let time = (+new Date(+endTime) - +new Date())/1000;    
      let result = onIncrease(time);
      setHour(result.h);
      setMinute(result.m);
      setSecond(result.s);
      
    }, 1000)
  }
  
  loop();
  return (
    <div className="Card"> 
    {printDate} 까직 &nbsp;
      {hour}시간&nbsp;
      {minute}분&nbsp;
      {second}초 전
    </div>
  );
}

export default Timer;
