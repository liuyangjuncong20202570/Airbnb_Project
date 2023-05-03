import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['abc', 'cba', 'nba', 'mba', 'aaa', 'bbb', 'ccc', 'ddd']
  const [currentIndex, setCurrentIndex] = useState(0)
  const BtnClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => BtnClickHandle(false)}>上一个</button>
        <button onClick={(e) => BtnClickHandle(true)}>下一个</button>
      </div>
      <div className="indicator">
        <Indicator currentIndex={currentIndex}>
          {names.map((item, index) => {
            return <button key={index}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
