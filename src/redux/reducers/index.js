import { combineReducers } from 'redux';

import { professionReducer } from './profession';
import { professionalReducer } from './professional';

export const rootReducer = combineReducers({
  professional: professionalReducer,
  profession: professionReducer,
});
