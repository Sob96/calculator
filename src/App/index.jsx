import React, { lazy, Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Header from '@/components/Header/HeaderFunc'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/theme'
import GlobalStyles from '@/globalStyles'

const HomePage = lazy(() => import('@/pages/Home/HomeFunc'))
const Settings = lazy(() => import('@/pages/Settings'))

const Application = () => {
  const [theme, setTheme] = useState('Light theme')
  return (
    <Suspense fallback={< Loader />}>
      <ThemeProvider
        theme={
          theme === 'Light theme' ? lightTheme : darkTheme
        }>
        <Header />
        <Routes>
          <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
          <Route path={SETTINGS_PAGE_ROUTE} element={<Settings theme={theme} setTheme={setTheme} />} />
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </Suspense>
  )
}

export default Application