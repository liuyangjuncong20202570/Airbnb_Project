import React, { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { ItemWrapper } from './style'
import propTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const swiperRef = useRef()

  const BtnClickHandle = (isRight = true, e) => {
    e.stopPropagation()
    isRight ? swiperRef.current.next() : swiperRef.current.prev()
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = itemData?.picture_urls.length - 1
    if (newIndex > itemData?.picture_urls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const swiperElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => BtnClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => BtnClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator currentIndex={currentIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div key={index} className="dot-item">
                <span
                  className={classNames('dot', {
                    active: currentIndex === index
                  })}></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div key={item} className="cover">
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  const ItemClickHandle = () => {
    if (itemClick) itemClick(itemData)
  }
  return (
    <ItemWrapper
      itemWidth={itemWidth}
      dyncColor={itemData?.verify_info?.text_color || '#39576a'}>
      <div className="inner" onClick={ItemClickHandle}>
        {!itemData.picture_urls ? pictureElement : swiperElement}
        <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            precision={0.1}
            sx={{ fontSize: '12px', color: '#00848a' }}
            value={itemData.star_rating ?? 5}
            readOnly
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: propTypes.object,
  itemWidth: propTypes.string
}

export default RoomItem
