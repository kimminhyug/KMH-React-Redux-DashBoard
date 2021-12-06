
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


const initialState: SelectorState = {
  text : null
};

// 리듀서
function selector(
  state: SelectorState = initialState,
  action: SelectorAction
): SelectorState {
  
  switch (action.type) {
    case CHANGE:   
    console.log(state)
      return {text: action.payload.text, onChange:action.payload.onChange};
    default:
      return state;
  }
}

export default selector;