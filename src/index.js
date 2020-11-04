/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import createWhitelistFilter from 'redux-persist-transform-filter';
import immutableTransform from 'redux-persist-transform-immutable';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import history from './history';
import * as serviceWorker from './serviceWorker';
import rootSaga from './store/rootSaga';
import rootReducer from './store/reducers';

// If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  let composeEnhancers = compose;
  let reduxSagaMonitorOptions = {};
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
    });
  }

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  if (window.__SAGA_MONITOR_EXTENSION__)
    reduxSagaMonitorOptions = {
      sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    };
  /* eslint-enable */
}

const whiteList = createTransform(
  (inboundState, key) => {
    debugger;
    if (key === 'userInfo') {
      // This is saving to storage
      // Save only the counter field for second reducer
      return inboundState.toJS();
    }
    return inboundState;
  },
  (outBoundState, key) => {
    debugger;
    if (key === 'userInfo') {
      // Receiving data from storage
      // add the saved counter field in reducer object
      return outBoundState.userInfo;
    }
    return outBoundState;
  }
);
const persitingReducers = createWhitelistFilter('userInfo');
const persistConfig = {
  // transforms: [
  //   immutableTransform({
  //     whitelist: ['userInfo'],
  //   }),
  // ],
  storage: storage,
  key: 'users',
  // whitelist: ['userInfo'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

// const onRenderCallback = (
//   id, // the "id" prop of the Profiler tree that has just committed
//   phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//   actualDuration, // time spent rendering the committed update
//   baseDuration, // estimated time to render the entire subtree without memoization
//   startTime, // when React began rendering this update
//   commitTime, // when React committed this update
//   interactions // the Set of interactions belonging to this update
// ) => {
//   // Aggregate or log render timings...
//   console.log(id,phase,actualDuration,baseDuration,startTime,commitTime,interactions)
// };
ReactDOM.render(
  // <Profiler id='Navigation' onRender={onRenderCallback}>
  <Router history={history}>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </Router>,
  // </Profiler>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
