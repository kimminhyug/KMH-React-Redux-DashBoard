import axios, { AxiosResponse } from 'axios';
import resolve from 'resolve';
import { PENDING } from '../action/http_api';
const SUBMIT = 'search/SUBMIT' as const;


const SUCCESS = 'search/SUCCESS' as const;
const SUCCESS_GET_MATCH_LIST = 'search/SUCCESS_GET_MATCH_LIST' as const;
const SUCCESS_GET_MATCH_INFO = 'search/SUCCESS_GET_MATCH_INFO' as const;

const FAIL_GET_MATCH_INFO = 'search/SUCCESS_GET_MATCH_INFO' as const;

const FAIL = 'search/FAIL' as const;

// 액션
export const submit = (props:any) => ({
  type: SUBMIT,
  payload : props,
});

export const success = (props:any) => ({
  type: SUCCESS,
  payload : props,
});

export const pending = (props:any) => ({
  type: PENDING
});

export const successGetMatchList = (props:any) => ({
  type: SUCCESS_GET_MATCH_LIST,
  payload : props,
});

export const successGetMatchInfo = (props:any) => ({
  type: SUCCESS_GET_MATCH_INFO,
  payload : props,
});

export const failGetMatchInfo = (props:any) => ({
  type: FAIL_GET_MATCH_INFO,
  payload : props,
});


// export const getMatchesData = (id:String) => async (dispatch:any) => {
  
//     dispatch(getUserInfo(id));
//     dispatch(getMatchList());
//     dispatch(getMatchInfo());
    
  
//     // dispatch(success(posts)); // 성공
// };

export const getUserInfo = (id:String) => async (dispatch:any) => {
  try {
    dispatch(pending);
    const posts = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=RGAPI-f6fa3a26-d60c-4ed3-a442-0668ede41606');
    dispatch(success(posts)); // 성공
  } catch(e) {
    dispatch(failGetMatchInfo(e));
  }
   
};

export const getMatchList = (puuid:String) => async (dispatch:any) => {
    try {
      dispatch(pending);
      let api = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=RGAPI-f6fa3a26-d60c-4ed3-a442-0668ede41606'
      const posts = await axios.get(api);
      
      dispatch(successGetMatchList(posts));
    } catch(e) {
      dispatch(failGetMatchInfo(e));
    }
  
  }
export const getMatchInfo = (matchId:String) => async (dispatch:any) => {
  try {
    dispatch(pending);
    const posts = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=RGAPI-f6fa3a26-d60c-4ed3-a442-0668ede41606');
    dispatch(successGetMatchInfo(posts)); // 성공
  } catch(e) {
    console.log(e);
    dispatch(failGetMatchInfo(e));
  }
};

 const getMatchInfoSynk = (matchId:string) => {

  return new Promise((resolve,reject)=>{
    axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=RGAPI-f6fa3a26-d60c-4ed3-a442-0668ede41606').then((res)=>{
      console.log(res);
      console.log(matchId)
      resolve(res);
      return;
    })
  })
}
export const getMatchInfoByIdArr = (matchIdArr:any[]) => async (dispatch:any) => {
  try {
    // dispatch(pending);
    console.log(matchIdArr)
    var i=0;
    
    dispatch(pending);
    const pr = (_i:number) => {
      let matchId = matchIdArr[_i]
      getMatchInfoSynk(matchId).then((res)=>{
        console.log(res);
        dispatch(successGetMatchInfo(res)); // 성공
        if(matchIdArr.length-1 > i) {
          i = i + 1;
          pr(i)
        }
      });
    }

    pr(i);
    
    
  } catch(e) {
    console.log(e);
    dispatch(failGetMatchInfo(e));
  }
};


// payload: diff

type SearchAction =
  | ReturnType<typeof submit>
  | ReturnType<typeof success>
  | ReturnType<typeof successGetMatchList>
  | ReturnType<typeof successGetMatchInfo>
  | ReturnType<typeof failGetMatchInfo>
  | ReturnType<typeof pending>;
  

type SearchState = {
  text:String
  // onSubmit:Function,
  response:any
  puuid:String
  name:String
  matchList:any[]
  matchInfo:any[]
  pending : Boolean
  error : Boolean,
  matchCount:Number
};


const initialState: SearchState = {
  text : '',
  // onSubmit:()=>{},
  response : new Response(),
  pending:false,
  error : false,
  puuid:'',
  name:'',
  matchList:[],
  matchInfo:[],
  matchCount:0
};

// 리듀서
function search(
  state: SearchState = initialState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case PENDING:   
      return {...state,pending:true};
    case SUBMIT:   
      return {...state};
    case SUCCESS:   
      return {...state, puuid:action.payload.data.puuid, name:action.payload.data.name};
    case SUCCESS_GET_MATCH_LIST:   
    
      return {...state, matchList:action.payload.data.reverse(), pending:false};
    case SUCCESS_GET_MATCH_INFO:
      
      // console.log(action.payload.data.metadata.matchId)  
      const matchCount = state.matchInfo.push(action.payload.data);
      // console.log(matchCount);

      return {...state,  matchInfo:state.matchInfo, matchCount:matchCount, pending:false};
      case FAIL_GET_MATCH_INFO:
        
        // console.log(action.payload.data.metadata.matchId)   
        return {...state, pending:false, error:true};
    default:
      return state;
  }
}

export default search;