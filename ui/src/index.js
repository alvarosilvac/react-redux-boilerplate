import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import initialState from './reducers/initialState';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const reducer = rootReducer(history);

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(
    reduxThunk,
    logger,
    routeMiddleware
  ))
);

const persistor = persistStore(store)

ReactDOM.render((
  <Provider store={store}>
    <PersistGate
      persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
