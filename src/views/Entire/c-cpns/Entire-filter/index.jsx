import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [currentItems, setCurrentItems] = useState([])
  const filterTabClickHandle = (item) => {
    const newItems = [...currentItems]
    if (currentItems.includes(item)) {
      // 当存在该item时应该是移除操作
      const itemIndex = currentItems.findIndex(
        (filterItem) => filterItem === item
      )
      newItems.splice(itemIndex, 1)
    } else {
      // 否则才是添加操作
      newItems.push(item)
    }
    setCurrentItems(newItems)
  }
  return (
    <FilterWrapper>
      {filterData.map((item, index) => {
        return (
          <div
            onClick={(e) => filterTabClickHandle(item)}
            className={classNames('filterTab', {
              active: currentItems.includes(item)
            })}
            key={index}>
            {item}
          </div>
        )
      })}
    </FilterWrapper>
  )
})

export default EntireFilter
