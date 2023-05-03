import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home.js'
import entireReducer from './modules/entire'
import DetailSlice from './modules/detail.js'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireReducer,
    detail: DetailSlice
  }
})

export default store
