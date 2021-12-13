
const ADD = 'list/INSERT' as const;
const SELECT = 'list/SELECT' as const;

type addProps =  {
    championId : String,
    user : String,
    data : any,
    championPicture:string
}
// 액션
export const add = ( {championId, user, data, championPicture }:addProps ) => ({
  type: ADD,
  payload : {
    championId : championId,
    user : user,
    data : data,
    championPicture:championPicture
  }
});

export const select = (props:any) => ({
  type: SELECT,
  payload : props,
});

type ListAction =
  | ReturnType<typeof add>
  | ReturnType<typeof select>;

type ListState = any[];


const initialState: ListState = [
    // {championId:"dd", user:'ㄴ눈'},
    // {championId:"dd", user:'ㄴ눈'},
    // {championId:"dd", user:'ㄴ눈'},
    // {championId:"dd", user:'ㄴ눈'},
    // {championId:"dd", user:'ㄴ눈'},
    // {championId:"dd", user:'ㄴ눈'},
    // {championId:"dd", user:'ㄴ눈'},
];

// 리듀서
function list(
  state: ListState = initialState,
  action: ListAction
): ListState {
  
  switch (action.type) {
    case ADD:
      return [{...action.payload}, ...state]
    default:
      return state;
  }
}

export default list;