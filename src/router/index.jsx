import { Navigate } from 'react-router-dom'
import React from 'react'

const Home = React.lazy(() => import('@/views/Home'))
const Entire = React.lazy(() => import('@/views/Entire'))
const Detail = React.lazy(() => import('@/views/Detail'))

export const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/detail',
    element: <Detail />
  }
]
