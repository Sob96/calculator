import { combineReducers } from 'redux'

import { calculateReducer, themeReducer } from './example'

export const rootReducer = combineReducers({
  calculation: calculateReducer,
  theme: themeReducer,
})
