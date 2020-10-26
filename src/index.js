import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import history from './history';
import * as serviceWorker from './serviceWorker';
import rootSaga from './store/rootSaga';
import rootReducer from './store/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

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
      <App />
    </Provider>
  </Router>,
  // </Profiler>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
