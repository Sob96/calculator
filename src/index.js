/* eslint-disable prettier/prettier */
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import ErrorBoundary from './App/ErrorBoundary'
import Loader from './components/Loader'
import Application from '@/App'
import { store, persistor } from '@/store'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={< Loader />} persistor={persistor}>
      <BrowserRouter>
        <ErrorBoundary>
          <Application />
        </ErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
