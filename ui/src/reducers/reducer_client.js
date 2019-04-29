import initialState from './initialState';

export default function clientReducer(state = initialState.client, action){

  switch(action.type){

    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.name
      })

    case 'SET_LASTNAME':
      return Object.assign({}, state, {
        lastname: action.lastname
      })

    case 'LOG_OUT':
      return initialState.client

    default:
      return state
  }
}