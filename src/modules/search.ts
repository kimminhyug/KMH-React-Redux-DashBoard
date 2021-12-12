
const SUBMIT = 'search/SUBMIT' as const;


// 액션
export const submit = (props:any) => ({
  type: SUBMIT,
  payload : props,
});
export const submitAsync = (props:any) => (dispatch:any) => {
  
  setTimeout(() => dispatch(submit(props)), 3000);
};
// payload: diff

type SearchAction =
  | ReturnType<typeof submit>;

type SearchState = {
  text:String,
  onSubmit:Function
};


const initialState: SearchState = {
  text : '',
  onSubmit:()=>{}
};

// 리듀서
function search(
  state: SearchState = initialState,
  action: SearchAction
): SearchState {
  
  switch (action.type) {
    case SUBMIT:   
    console.log(state);
    
      return {text: action.payload.text, onSubmit:action.payload};
    default:
      return state;
  }
}

export default search;