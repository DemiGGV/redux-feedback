import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { statsReduser } from './statsSlice';
import { feedbackReduser } from './feedbackSlice';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  feedback: feedbackReduser,
  stats: statsReduser,
});

export const store = createStore(rootReducer, enhancer);
