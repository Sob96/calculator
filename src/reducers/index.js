import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { calculateReducer, historyReducer, themeReducer } from './example'
import { persistConfig } from '@/store'

export const rootReducer = combineReducers({
  calculation: calculateReducer,
  // history: historyReducer,
  theme: themeReducer,
})
