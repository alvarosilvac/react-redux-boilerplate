import * as types from './actionTypes.js';
import { push } from 'react-router-redux';

export function setName(name){
  return function(dispatch){
    if(name){
      return dispatch(nameSet(name))
    }
  }
}

export function nameSet(name){
  return{
    type: types.SET_NAME,
    name
  }
}

export function setLastName(lastname){
  return function(dispatch, getState){
    if(lastname && getState().client.name){
      dispatch(lastNameSet(lastname))
      return dispatch(push('/'))
    }
  }
}

export function lastNameSet(lastname){
  return{
    type: types.SET_LASTNAME,
    lastname
  }
}

export function logOut(){
  return{
    type: types.LOG_OUT
  }
}