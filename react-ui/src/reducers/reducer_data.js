import initialState from './initialState';

export default function clientReducer(state = initialState.data, action){

  switch(action.type){

    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      })

    case 'SET_MESSAGE':
      return Object.assign({}, state, {
        message: action.message
      })

    case 'RESET_DATA':
      return initialState.data

    default:
      return state
  }
}