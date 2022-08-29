import { persistConfig } from '@/store'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { calculateReducer, historyReducer, themeReducer } from './example'

export const rootReducer = combineReducers({
  calculation: calculateReducer,
  history: historyReducer,
  theme: themeReducer,
})
