
const CHANGE = 'search/CHANGE' as const;


// 액션
export const change = (props:any) => ({
  type: CHANGE,
  payload : props,
});
// payload: diff


type SelectorAction =
  | ReturnType<typeof change>;

type SelectorState = {
};

// 초기상태를 선언합니다.
const initialState: SelectorState = {
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
function selector(
  state: SelectorState = initialState,
  action: SelectorAction
): SelectorState {
  switch (action.type) {
    case CHANGE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
    console.log(action.payload);
    console.log("?")
    
      return {onChange:action.payload };
    default:
      return state;
  }
}

export default selector;