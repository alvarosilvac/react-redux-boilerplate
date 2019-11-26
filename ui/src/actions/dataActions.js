import * as types from './actionTypes.js';

export function increment(){
  return{
    type: types.INCREMENT
  }
}

export function setMessage(message){
  return function(dispatch){
    let upperCaseMess = message.toUpperCase()
    return dispatch(_setMessage(upperCaseMess))
  }
}

export function _setMessage(message){
  return{
    type: types.SET_MESSAGE,
    message
  }
}