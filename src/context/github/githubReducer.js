import { SEARCH_USERS, GET_USERS , GET_USER, GET_REPOS, 
  SET_ALERT, SET_LOADING, REMOVE_ALERT, CLEAR_USERS} from '../types';


export default (state,action) => {
  
  switch(action.type){
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state, 
        loading: true
      }
  }
}