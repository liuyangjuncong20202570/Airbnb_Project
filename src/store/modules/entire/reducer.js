import * as actionType from '../entire/constants.js'

const initialState = {
  currentPage: 0, // 当前页码
  roomList: {}, // 当前房源数据
  totalCount: 0, // 当前总数据
  isLoading: false, // 是否正在进行网络请求
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionType.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionType.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionType.CHANGE_ISLOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer
