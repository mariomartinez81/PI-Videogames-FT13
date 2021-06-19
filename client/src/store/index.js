import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
