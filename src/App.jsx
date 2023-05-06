import React, { memo } from 'react'
import { routes } from './router'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()
  return (
    <div>
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
})

export default App
