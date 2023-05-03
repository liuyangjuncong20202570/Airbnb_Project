import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { currentIndex = 0 } = props
  const indicatoreRef = useRef()
  useEffect(() => {
    // 在此处计算需要滚动的距离
    const currentItem = indicatoreRef.current.children[currentIndex]
    // 1：获取当前子元素的offsetLeft的值
    const OffsetLeft = currentItem.offsetLeft
    // 2：获取当前子元素宽度的二分之一
    const halfClientWidth = currentItem.clientWidth / 2
    // 3: 获取整个indicator的宽度
    const halfIndicatorWidth = indicatoreRef.current.clientWidth / 2
    const IndicatorScroll = indicatoreRef.current.scrollWidth
    // 4：移动的宽度就等于offsetLeft + 二分之一元素宽度 - 二分之一indicator的宽度
    let totalScrollWidth = OffsetLeft + halfClientWidth - halfIndicatorWidth
    // 5：如果总移动宽度小于0时，则让总移动宽度=0
    // 左边特殊情况
    if (totalScrollWidth < 0) totalScrollWidth = 0
    const totalDistance = IndicatorScroll - indicatoreRef.current.clientWidth
    // 右边特殊情况
    if (totalScrollWidth > totalDistance) totalScrollWidth = totalDistance
    indicatoreRef.current.style.transform = `translateX(${-totalScrollWidth}px)`
  }, [currentIndex])
  return (
    <IndicatorWrapper>
      <div className="I-content" ref={indicatoreRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex: PropTypes.number
}

export default Indicator
