import { combineReducers } from 'redux';
import { standards, standardsHasErrored, standardsIsLoading } from './standards';
export default combineReducers({
  standards
});