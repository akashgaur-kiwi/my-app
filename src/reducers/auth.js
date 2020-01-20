import {
  APP_LOAD
    // LOGIN,
    // REGISTER,
    // LOGIN_PAGE_UNLOADED,
    // REGISTER_PAGE_UNLOADED,
    // ASYNC_START,
    // UPDATE_FIELD_AUTH
  } from '../constants/actionType';



const defaultState = {
  name: 'Boost Up'
}

const authReducer =  (state = defaultState, action) => {
  console.log('action',action)
    switch(action.type) {
      case APP_LOAD:
      return  { ...state , name: action.payload }
      default:
      return state;
    }
  
    // switch (action.type) {
    //   case 'LOGIN':
    //   case 'REGISTER':
    //     return { }
    //     //   ...state,
    //     //   inProgress: false,
    //     //   errors: action.error ? action.payload.errors : null
    //    // };
    // //   case LOGIN_PAGE_UNLOADED:
    // //   case REGISTER_PAGE_UNLOADED:
    // //     return {};
    // //   case ASYNC_START:
    // //     if (action.subtype === LOGIN || action.subtype === REGISTER) {
    // //       return { ...state, inProgress: true };
    // //     }
    // //     break;
    // //   case UPDATE_FIELD_AUTH:
    // //     return { ...state, [action.key]: action.value };
    //   default:
    //     return state;
    // }
    return state;
  };
  
   
  export default authReducer;
    