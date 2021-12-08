
const INSERT = 'grid/INSERT' as const;
const SELECT = 'grid/SELECT' as const;


// 액션
export const insert = (props:any) => ({
  type: INSERT,
  payload : props,
});

export const select = (props:any) => ({
  type: SELECT,
  payload : props,
});

type GridAction =
  | ReturnType<typeof insert>
  | ReturnType<typeof select>;

type GridState = {
  data : any[],
  
  // text : string
};


const initialState: GridState = {
  data : [],
  // text : ''
};

// 리듀서
function grid(
  state: GridState = initialState,
  action: GridAction
): GridState {
  
  switch (action.type) {
    case INSERT:
      console.log(action)
        // if(state.text) {

        // } else {
          
        // }
      return {data:action.payload.data};
    case SELECT:
      console.log(action);
      return {data:action.payload.data};
    default:
      return state;
  }
}

export default grid;