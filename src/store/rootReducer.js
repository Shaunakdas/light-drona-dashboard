import { combineReducers } from 'redux';
import { standards } from './standards/reducer';
import { chapters } from './chapters/reducer';
import { games } from './games/reducer';
export default combineReducers({
  standards,
  chapters,
  games
});