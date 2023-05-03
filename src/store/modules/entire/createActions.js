import { fetchEntireRoomList } from '@/services/modules/entire'
import * as actionType from '../entire/constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionType.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionType.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionType.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionType.CHANGE_ISLOADING,
  isLoading
})


export const fetchRoomList = (page = 0) => {
  return async (dispatch, getState) => {
    // 实现分页器之前先将currentpage进行更新
    dispatch(changeCurrentPageAction(page))
    // 为了实现分页器的实现，我们应该从reducer中获取currentPage的值传给fetchEntireRoomList中
    // 在发送网络请求之前将控制蒙版的变量设置为true
    dispatch(changeIsLoadingAction(true))
    const res = await fetchEntireRoomList(page * 20)
    // 一旦网络请求结束就将变量设置为false
    dispatch(changeIsLoadingAction(false))
    // 将获取的roomList、totalCount数据保存至reducer中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}
