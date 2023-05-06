import { createSlice } from '@reduxjs/toolkit'

const MainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: true,
      topAlpha: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = MainSlice.actions
export default MainSlice.reducer
