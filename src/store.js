import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
