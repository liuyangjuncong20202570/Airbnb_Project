import React, { memo } from 'react'
import { routes } from './router'
import { useRoutes } from 'react-router-dom'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
})

export default App
