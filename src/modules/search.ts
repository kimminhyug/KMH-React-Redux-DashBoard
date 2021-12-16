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

export const getUserMatch = () => ({
  type: GET_USER_MATCH
});



// export const getMatchesData = (id:String) => async (dispatch:any) => {
  
//     dispatch(getUserInfo(id));
//     dispatch(getMatchList());
//     dispatch(getMatchInfo());
    
  
//     // dispatch(success(posts)); // 성공
// };

export const getUserInfo = (id:String|Promise<any>) => async (dispatch:any) => {
  
    dispatch(pending);
    const posts = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=' + RIOT_KEY).catch((e)=>{
      dispatch(failGetMatchInfo(e));
      return e;
    });
    dispatch(success(posts)); // 성공
    return posts;

   
};

export const getUserInfoAsync = async(id:String|Promise<any>) =>  {
  
  
  const posts = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=' + RIOT_KEY).catch((e)=>{
  
    return e;
  });
  
  return posts;

 
};

export const getMatchList = (puuid:any) => async (dispatch:any) => {
    
      dispatch(pending);
      let api = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=' + RIOT_KEY
      const posts = await axios.get(api).catch((e)=>{
        dispatch(failGetMatchInfo(e));
      });
      dispatch(successGetMatchList(posts));
      return posts;
    
  
}


export const getMatchListAsync = async(puuid:any) =>  {
    
  
  let api = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key=' + RIOT_KEY
  return await axios.get(api);
  


}

export const getMatchInfo = (matchId:any) => async (dispatch:any) => {
  

  dispatch(pending);
  const posts = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY).catch((e)=>{
    console.log(e);
    dispatch(failGetMatchInfo(e));
    return e;
  });
  dispatch(successGetMatchInfo(posts)); // 성공
  return posts;

};

 const getMatchInfoASynk = (matchId:any) => {

  // return new Promise((resolve,reject)=>{
    
    let api = 'https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY;
    return axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId+'?api_key=' + RIOT_KEY);
  // })
}

  export const selectUser = ( id : any ) =>  async(dispatch:any) => {
    
    let userInfo = await getUserInfoAsync(id);
    
    dispatch(success(userInfo)); // 성공
  let matchList = await getMatchListAsync(userInfo.data.puuid);
  dispatch(successGetMatchList(matchList));
  
  // let match = await getMatchInfoASynk(matchList?.data[i]);
  
  for (let index = 0; index < matchList.data.length; index++) {
    let match = await getMatchInfoASynk(matchList?.data[index]);
  
    dispatch(successGetMatchInfo(match)); // 성공
  }
    // dispatch(getUserMatch());
  // let match = await getMatchInfo(matchList[]);
  


  
  }
export const getMatchInfoByIdArr = (matchIdArr:any[]) =>  (dispatch:any) => {
  try {
    // dispatch(pending);
    
    var i=0;
    
    dispatch(pending);
    const pr = async(_i:number) => {
      let matchId = matchIdArr[_i]
      
      let res = await getMatchInfoASynk(matchId);
        dispatch(successGetMatchInfo(res)); // 성공
        if(matchIdArr.length-1 > i) {
          i = i + 1;
          pr(i)
        }
      
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
      return {...state, puuid:action.payload.data.puuid, name:action.payload.data.name};
    case SUCCESS_GET_MATCH_LIST:   
    
      return {...state, matchList:action.payload.data.reverse(), pending:false};
    case SUCCESS_GET_MATCH_INFO:
      
      let matchCount = 0;
      if(action.payload) {
        matchCount = state.match.push(action.payload?.data);
      }
      
      // console.log(matchCount);
      return {...state,  match:state.match, matchCount:matchCount, pending:false};
      case FAIL_GET_MATCH_INFO:
        
        // console.log(action.payload.data.metadata.matchId)   
        return {...state, pending:false, error:true};
    default:
      return state;
  }
}

export default search;