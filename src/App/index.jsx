import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Header from '@/components/Header/HeaderFunc'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/theme'
import GlobalStyles from '@/globalStyles'
import { useSelector } from 'react-redux'

const HomePage = lazy(() => import('@/pages/Home/HomeFunc'))
const Settings = lazy(() => import('@/pages/Settings'))

const Application = () => {
  const theme = useSelector(state => state.theme.theme)
  return (
    <Suspense fallback={< Loader />}>
      <ThemeProvider
        theme={
          theme === 'Light theme' ? lightTheme : darkTheme
        }>
        <Header />
        <Routes>
          <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
          <Route path={SETTINGS_PAGE_ROUTE} element={<Settings />} />
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </Suspense>
  )
}

export default Application