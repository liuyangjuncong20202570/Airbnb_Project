import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { titles, onTabClick } = props

  const tabsClickHandle = (index) => {
    setCurrentIndex(index)
    if (onTabClick) onTabClick(index)
  }

  return (
    <TabsWrapper>
      <div className="content">
        <div className="inner">
          {titles.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('item', {
                  active: currentIndex === index
                })}
                onClick={(e) => tabsClickHandle(index)}>
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array
}

export default SearchTabs
