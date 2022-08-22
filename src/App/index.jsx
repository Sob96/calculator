import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Header from '@/components/Header/HeaderFunc'

const HomePage = lazy(() => import('@/pages/Home/HomeClass'))
const Settings = lazy(() => import('@/pages/Settings'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={SETTINGS_PAGE_ROUTE} element={<Settings />} />
    </Routes>
  </Suspense>
)
