import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'

const HomeSectionV3 = memo((props) => {
  const { itemData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <ScrollView>
        {itemData.list.map((item, index) => {
          return <LongforItem key={index} item={item} />
        })}
      </ScrollView>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV3
