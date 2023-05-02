import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { item } = props
  return (
    <ItemWrapper>
      <div className="contain">
        <div className="cover">
          <img src={item.picture_url} alt="" className="avatar" />
        </div>
        <div className="bg-cover"></div>
        <div className="desc">
          <div className="city">{item.city}</div>
          <div className="price">均价{item.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
  item: PropTypes.object
}

export default LongforItem
