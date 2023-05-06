import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home.js'
import entireSlice from './modules/entire'
import DetailSlice from './modules/detail.js'
import MainSlice from './modules/main.js'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireSlice,
    detail: DetailSlice,
    main: MainSlice
  }
})

export default store
