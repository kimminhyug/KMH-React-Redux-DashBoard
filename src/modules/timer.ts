const INCREASE = 'timer/INCREASE' as const;

// 액션 생성함수를 선언합니다
export const increase = (diff:Number) => ({
  type: INCREASE,
  payload: diff
});


// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type TimerAction = 
| ReturnType<typeof increase>

type Result = {
  h: Number,
  m: Number,
  s: Number
}
// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type TimerState = {
  time : Number,
  startTime : Number,
  endTime : Number,
  result : Result
};

// 초기상태를 선언합니다.
const initialState: TimerState = {
  time : 0,
  startTime : +new Date(),
  endTime : +new Date(),
  result : {
    h: 0,
    m: 0,
    s: 0
  }

};

const calcTime = (time:Number) => {
  let result = {
    h: Math.floor(+time/3600), 
    m: Math.floor((+time%3600)/60),
    s: +(+time % 60).toFixed(0)
  };
//안씀
  return  result
}


// let ttt = (+new Date().setHours(18,30,0,0) - +new Date())/1000;



// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
function timer(
  state: TimerState = initialState,
  action: TimerAction
): TimerState {
  switch (action.type) {
    case INCREASE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
      state.endTime = action.payload;
      let time = +(+new Date(+state.endTime) - +new Date())/1000;
      let data = { 
        time : time,
        startTime: +state.startTime,
        endTime:state.endTime,
        result: calcTime(time)
      };
      
      return data;
    default:
      return state;
  }
}

export default timer;