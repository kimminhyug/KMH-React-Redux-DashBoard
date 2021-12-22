import axios, { AxiosResponse } from 'axios';
import resolve from 'resolve';
import { PENDING } from '../action/http_api';

//apiKey
import { RIOT_KEY } from '../key/riot';
import { Match, MatchInitialize } from '../types/riot/Match';

//riot type
import { MatchInfo, MatchInfoInitialize } from '../types/riot/MatchInfo';



const SUBMIT = 'search/SUBMIT' as const;


const SUCCESS = 'search/SUCCESS' as const;
const SUCCESS_GET_MATCH_LIST = 'search/SUCCESS_GET_MATCH_LIST' as const;
const SUCCESS_GET_MATCH_INFO = 'search/SUCCESS_GET_MATCH_INFO' as const;

const GET_USER_MATCH = 'search/GET_USER_MATCH' as const;
const INCREASE_MATCH_COUNT = 'search/INCREASE_MATCH_COUNT' as const;
const FAIL_GET_MATCH_INFO = 'search/SUCCESS_GET_MATCH_INFO' as const;


const INIT = 'search/INIT' as const;
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

export const getUserMatch = () => ({
  type: GET_USER_MATCH
});

export const increaseMatchCount = () => ({
  type: INCREASE_MATCH_COUNT
});

export const init = () => ({
  type: INIT
});



export const getUserInfo = (id:String|Promise<any>) => async (dispatch:any) => {
  dispatch(pending);
  // const posts = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=' + RIOT_KEY).catch((e)=>{
  const posts = await axios.get('/riot/api/summoner/v4/summoners/by-name/'+id+'?api_key=' + RIOT_KEY).catch((e)=>{
    console.log(e);
    dispatch(failGetMatchInfo(e));
    return e;
  });
  dispatch(success(posts)); // 성공
  return posts; 
};


/**
 * 유저의 닉네임을 이용하여 유저정보를 불러오는 RIOT API 호출
 * @param 유저닉네임 : string
 * @returns response{..., data:type/MatchInfo.ts}
 */
export const getUserInfoAsync = async(id:string) =>  {
  let posts:any;
  // posts = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=' + RIOT_KEY).catch((e)=>{
    posts = await axios.get('/riot/api/summoner/v4/summoners/by-name/'+id+'?api_key=' + RIOT_KEY).catch((e)=>{
    console.log(e.toJSON());
    console.log(e.message);
    console.log(e.status);
    
    
    // dispatch(failGetMatchInfo(e));
    return posts;
  });
  return posts;
};

/**
 * 유저의 닉네임을 이용하여 유저정보를 불러오는 RIOT API 호출
 * @param 유저닉네임 : string
 * @returns response{..., data:type/MatchInfo.ts}
 */
export const getMatchList = (puuid:any) => async (dispatch:any) => {
  dispatch(pending);
  // let api = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=' + RIOT_KEY
  let api = '/riot/api/asia/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=' + RIOT_KEY
  const posts = await axios.get(api).catch((e)=>{
    dispatch(failGetMatchInfo(e));
  });
  dispatch(successGetMatchList(posts));
  return posts;
}


export const getMatchListAsync = async(puuid:any) =>  {
  // let api = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=' + RIOT_KEY
  let api = '/riot/api/asia/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=' + RIOT_KEY
  return await axios.get(api);  
}

export const getMatchInfo = (matchId:any) => async (dispatch:any) => {
  dispatch(pending);
  // const posts = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY).catch((e)=>{
  const posts = await axios.get('/riot/api/asia/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY).catch((e)=>{
    console.log(e);
    dispatch(failGetMatchInfo(e));
    return e;
  });
  dispatch(successGetMatchInfo(posts)); // 성공
  return posts;
};

const getMatchInfoASynk = (matchId:any) => {
  // return axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY);
  return axios.get('/riot/api/asia/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY);
} 

export const selectUser = ( id : any ) =>  async(dispatch:any) => {
  
  let userInfo = await getUserInfoAsync(id);
  dispatch(success(userInfo)); // 성공
  if(!userInfo) {console.log('사용자 정보를 불러올 수 없습니다.');   return;}
  let matchList = await getMatchListAsync(userInfo.data.puuid);
  dispatch(successGetMatchList(matchList));
  
  for (let index = 0; index < matchList.data.length; index++) {
    let match = await getMatchInfoASynk(matchList?.data[index]);
    dispatch(successGetMatchInfo(match)); // 성공
  }
}

type SearchAction =
  | ReturnType<typeof submit>
  | ReturnType<typeof success>
  | ReturnType<typeof successGetMatchList>
  | ReturnType<typeof successGetMatchInfo>
  | ReturnType<typeof failGetMatchInfo>
  | ReturnType<typeof pending>
  | ReturnType<typeof increaseMatchCount>
  | ReturnType<typeof init>;
  

type SearchState = {
  text:String
  // onSubmit:Function,
  response:any
  puuid:String
  name:String
  matchList:any[]
  match:Match[]
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
  match:[MatchInitialize],
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
      return {...state, puuid:action.payload.data?.puuid, name:action.payload.data?.name};

    case SUCCESS_GET_MATCH_LIST:   
      return {...state, matchList:action.payload.data.reverse(), pending:false};

    case SUCCESS_GET_MATCH_INFO:
      let matchCount = 0;
      if(action.payload) {  
        matchCount = state.match.push(action.payload?.data);
      }
      return {...state,  match:state.match, matchCount:matchCount, pending:false};

    case FAIL_GET_MATCH_INFO:
      return {...state, pending:false, error:true};

    case INCREASE_MATCH_COUNT:
      return {...state, matchCount : +state.matchCount + 10}
    case  INIT:
      return initialState
    default:
      return state;
  }
}

export default search;