import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from "history";
import thunk from 'redux-thunk';

import reducer from './reducers/index.js';

export const history = createBrowserHistory();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
