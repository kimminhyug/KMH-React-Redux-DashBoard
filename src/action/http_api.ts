export const PENDING = 'http/HTTP_PENDING' as const;

// 액션
export const pending = (props:any) => ({
    type: PENDING
});
  
type HttpAction =
  | ReturnType<typeof pending>;
  

type HttpState = {
  pending : Boolean
  error : Boolean
};


const initialState: HttpState = {
  pending:false,
  error : false,
};



function httpApi( state: HttpState = initialState,
    action: HttpAction
  ): HttpState {
    switch (action.type) {
      case PENDING:   
          return {...state, pending:false, error:true};
      default:
        return state;
    }
  }

// export default handleActions({
//     [GET_POST_PENDING]: (state, action) => {
//         return {
//             ...state,
//             pending: true,
//             error: false
//         };
//     },
//     [GET_POST_SUCCESS]: (state, action) => {
//         const { title, body } = action.payload.data;

//         return {
//             ...state,
//             pending: false,
//             data: {
//                 title, body
//             }
//         };
//     },
//     [GET_POST_FAILURE]: (state, action) => {
//         return {
//             ...state,
//             pending: false,
//             error: true
//         }
//     }
// }, initialState);

export default httpApi;
