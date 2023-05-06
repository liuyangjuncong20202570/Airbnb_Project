import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconTriArrowBottom from '@/assets/svg/icon_triArrow_bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriArrowTop from '@/assets/svg/icon_triArrow_top'

const PictureBroswer = memo((props) => {
  const [isShowPreview, setIsShowPreview] = useState(true)
  const [isNext, setIsNext] = useState(true)
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  // 一旦显示图片浏览器就让页面滚动功能消失
  useEffect(() => {
    // 当图片浏览器刚加载出来时使整个页面的滚动功能取消
    document.body.style.overflow = 'hidden'
    return () => {
      // 当图片浏览器关闭时再恢复滚动功能
      document.body.style.overflow = 'auto'
    }
  }, [])

  const IconClickHandle = () => {
    if (closeClick) closeClick()
  }

  const btnClickHandle = (isNext) => {
    setIsNext(isNext)
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  const toggleHandle = () => {
    setIsShowPreview(!isShowPreview)
  }

  const IndicatorHandle = (index) => {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PictureWrapper isNext={isNext} showPreview={isShowPreview}>
      <div className="top" onClick={IconClickHandle}>
        <div className="close">
          <IconClose />
        </div>
      </div>
      <div className="content">
        <div className="control">
          <div className="btn left" onClick={(e) => btnClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>

          <div className="picture_container">
            <SwitchTransition mode="in-out">
              <CSSTransition
                key={pictureUrls[currentIndex]}
                timeout={200}
                classNames="pic">
                <img src={pictureUrls[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className="btn right" onClick={(e) => btnClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={toggleHandle}>
              <span>{isShowPreview ? '隐藏' : '显示'}图片列表</span>
              {isShowPreview ? <IconTriArrowBottom /> : <IconTriArrowTop />}
            </div>
          </div>
          <div className="list">
            <Indicator currentIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                    onClick={(e) => IndicatorHandle(index)}
                    key={index}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureWrapper>
  )
})

PictureBroswer.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBroswer
