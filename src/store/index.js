import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home.js'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireReducer
  }
})

export default store
