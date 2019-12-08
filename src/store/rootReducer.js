import { combineReducers } from 'redux';
import { standards } from './standards/reducer';
import { chapters } from './chapters/reducer';
export default combineReducers({
  standards,
  chapters
});