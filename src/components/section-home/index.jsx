import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeWrapper } from './style'
import RoomItem from '../room-item'

const SectionHome = memo((props) => {
  const { roomList, itemWidth } = props
  return (
    <HomeWrapper>
      {roomList?.slice(0, 8).map((item, index) => {
        return <RoomItem itemWidth={itemWidth} key={index} itemData={item} />
      })}
    </HomeWrapper>
  )
})

SectionHome.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionHome
