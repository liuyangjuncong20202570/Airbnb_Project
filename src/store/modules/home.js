import {
  fetchDiscountData,
  fetchGoodPriceData,
  fetchHighScoreData,
  fetchHotRecommandData,
  fetchLongForData,
  fetchPlusData
} from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeData = createAsyncThunk(
  'fetchHomeData',
  (state, { dispatch }) => {
    fetchGoodPriceData().then((res) => {
      dispatch(getGoodPriceAction(res))
    })

    fetchHighScoreData().then((res) => {
      dispatch(getHighScoreAction(res))
    })

    fetchDiscountData().then((res) => {
      dispatch(getDiscountAction(res))
    })

    fetchHotRecommandData().then((res) => {
      dispatch(getHotRecommandAction(res))
    })

    fetchLongForData().then((res) => {
      dispatch(getLongforAction(res))
    })

    fetchPlusData().then((res) => {
      dispatch(getPlusAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
    highScore: {},
    discount: {},
    recommand: {},
    longfor: {},
    plus: {}
  },
  reducers: {
    getGoodPriceAction(state, { payload }) {
      state.goodPrice = payload
    },

    getHighScoreAction(state, { payload }) {
      state.highScore = payload
    },

    getDiscountAction(state, { payload }) {
      state.discount = payload
    },

    getHotRecommandAction(state, { payload }) {
      state.recommand = payload
    },
    getLongforAction(state, { payload }) {
      state.longfor = payload
    },
    getPlusAction(state, { payload }) {
      state.plus = payload
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchHomeGoodPriceData.fulfilled, (state, { payload }) => {
    //     state.goodPrice = payload
    //   })
    //   .addCase(fetchHomeHighScoredata.fulfilled, (state, { payload }) => {
    //     state.highScore = payload
    //   })
  }
})

export const {
  getGoodPriceAction,
  getHighScoreAction,
  getDiscountAction,
  getHotRecommandAction,
  getLongforAction,
  getPlusAction
} = homeSlice.actions

export default homeSlice.reducer
