import { combineReducers } from 'redux';
import chores from './chores';
import days from './days';

const comboReducer = combineReducers({
  chores,
  days
});

export default comboReducer;
