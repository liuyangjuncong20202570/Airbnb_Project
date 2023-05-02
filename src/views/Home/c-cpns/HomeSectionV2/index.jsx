import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { HomeV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionHome from '@/components/section-home'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { itemData } = props
  // 注意对于useState的使用其初始值只有在第一次数据渲染时有效
  // 在此处由于第一次数据渲染时initialData中的数据为undefined
  // 所以在第一次时的city数据为空，后面不论设置什么样的初始值都无用
  // 所以解决方案是通过判断传入的props的值是否为空来控制组件是否渲染
  // 有值则渲染无值则不渲染,这样就能控制useState的初始化值的有效性
  const initialData = Object.keys(itemData.dest_list)[0]
  const [city, setCity] = useState(initialData)

  const roomList = useCallback((city) => {
    setCity(city)
  }, [])

  return (
    <HomeV2Wrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <SectionTabs onTabclick={roomList} tabsNames={itemData.dest_address} />
      <SectionHome
        itemWidth="33.333333%"
        roomList={itemData.dest_list?.[city]}
      />
      <SectionFooter name={city} />
    </HomeV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV2
