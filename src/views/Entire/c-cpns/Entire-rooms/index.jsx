import React, { memo, useCallback } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '@/components/room-item'
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeItemDataAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const { itemData, totalCount, isLoading } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ItemClickHandle = useCallback((item) => {
    // 通过props传递函数可以在父组件中拿到对应的itemData的数据
    // 将itemData数据存入redux中方便数据共享
    dispatch(changeItemDataAction(item))
    // 存入redux后将页面跳转至detail页面
    navigate('/detail')
  })
  return (
    <RoomWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {itemData.map((item) => {
          return (
            <RoomItem
              itemClick={ItemClickHandle}
              itemData={item}
              key={item._id}
              itemWidth="20%"
            />
          )
        })}
      </div>
      {isLoading && <div className="bg-cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRooms
