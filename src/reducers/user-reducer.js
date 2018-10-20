import { UPDATE_USER, SHOW_ERROR } from '../actions/user-action'

export default function userReducer(state = '', action) {
  switch(action.type) {
    case UPDATE_USER:
      return action.payload.user
    case SHOW_ERROR:
    	return action.payload.user
    default:
      return state
  }
}