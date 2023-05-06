import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/Entire-filter'
import EntireRooms from './c-cpns/Entire-rooms'
import EntirePagination from './c-cpns/Entire-pagination'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomList } from '@/store/modules/entire/createActions'
import { isEmptyO } from '@/utils/isEmptyObject'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  // 发送网路请求、保存数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomList())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])
  // 获取redux中数据
  const { roomList, totalCount, currentPage, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )
  return (
    <EntireWrapper>
      <AppHeader />
      <EntireFilter />
      {isEmptyO(roomList) && (
        <EntireRooms
          itemData={roomList}
          totalCount={totalCount}
          isLoading={isLoading}
        />
      )}
      {isEmptyO(roomList) && (
        <EntirePagination currentPage={currentPage} totalCount={totalCount} />
      )}
    </EntireWrapper>
  )
})

export default Entire
