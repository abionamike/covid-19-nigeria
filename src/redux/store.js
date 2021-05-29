import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore,combineReducers, applyMiddleware } from 'redux'
import { covidDataReducer } from './reducer';

const reducer = combineReducers({
  covidData: covidDataReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;