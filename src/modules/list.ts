import { MatchInfo } from "../types/riot/MatchInfo";
import { init } from "./search";

const ADD = 'list/INSERT' as const;
const SELECT = 'list/SELECT' as const;
const INIT = 'list/INIT' as const;

type addProps =  {
    match:MatchInfo,
    userInfo:any
}
// 액션
export const add = ( {match, userInfo }:addProps ) => ({
  type: ADD,
  payload : {
    match:match,
    userInfo:userInfo
  }
});

export const select = (props:any) => ({
  type: SELECT,
  payload : props,
});

export const initList = () => ({
  type: INIT,
});

type ListAction =
  | ReturnType<typeof add>
  | ReturnType<typeof select>
  | ReturnType<typeof initList>;

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
    case INIT:
      return initialState
    default:
      return state;
  }
}

export default list;