import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()
  const scrollRef = useRef()
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)

  useEffect(() => {
    const ScrollWidth = scrollRef.current.scrollWidth //可滚动长度
    const ClientWidth = scrollRef.current.clientWidth //可视区域长度
    const totalDistance = ScrollWidth - ClientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  const BtnHandle = (isRight) => {
    // 获取每个tabs的offsetLeft用于设置滚动距离
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollRef.current.children[newIndex]
    scrollRef.current.style.transform = `translateX(-${newEl.offsetLeft}px)`
    setPosIndex(newIndex)
    // 判断是否显示左边按钮
    setShowLeft(newEl.offsetLeft > 0)
    // 判断是否显示右按钮
    // 当之前可滚动区域小于tabs的做偏移量时说明不再可滚动了
    // setShowRight(totalDistanceRef.current <= newEl.offsetLeft)
    if (totalDistanceRef.current - newEl.offsetLeft <= 0) {
      setShowRight(false)
    } else {
      setShowRight(true)
    }
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => BtnHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => BtnHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
