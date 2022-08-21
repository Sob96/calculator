import { combineReducers } from 'redux'

import { calculateReducer, historyReducer } from './example'

export const rootReducer = combineReducers({
  number: calculateReducer,
  history: historyReducer,
})
