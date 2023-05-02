import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { tabsNames } = props

  const tabChange = (index, city) => {
    const { onTabclick } = props
    onTabclick(city)
    setCurrentIndex(index)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabsNames?.map((item, index) => {
          return (
            <span
              className={classNames('tab', { active: currentIndex === index })}
              onClick={(e) => tabChange(index, item.name)}
              key={index}>
              {item.name}
            </span>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabsNames: PropTypes.array
}

export default SectionTabs
