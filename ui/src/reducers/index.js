import client from './reducer_client';
import { persistCombineReducers } from 'redux-persist';
import { connectRouter } from 'connected-react-router';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}

export default (history) => persistCombineReducers(config, {
  router: connectRouter(history),
  client
})