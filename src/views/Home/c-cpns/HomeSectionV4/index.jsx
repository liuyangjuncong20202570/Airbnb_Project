import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV4Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionHome from '@/components/section-home'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const HomeSectionV4 = memo((props) => {
  const { itemData } = props
  return (
    <SectionV4Wrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <ScrollView>
        {itemData.list.map((item, index) => {
          return <RoomItem itemWidth="20%" itemData={item} key={index} />
        })}
      </ScrollView>
    </SectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV4
