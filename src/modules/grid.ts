
const INSERT = 'grid/INSERT' as const;


// 액션
export const insert = (props:any) => ({
  type: INSERT,
  payload : props,
});

type GridAction =
  | ReturnType<typeof insert>;

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
      
      return {data:action.payload.data};
    default:
      return state;
  }
}

export default grid;