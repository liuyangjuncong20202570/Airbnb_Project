import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { PictureWrapper } from './style'

const DetailPicture = memo((props) => {
  const { itemData } = useSelector((state) => ({
    itemData: state.detail.itemData
  }))
  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={itemData?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {itemData.picture_urls.slice(1, 5).map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
    </PictureWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture
