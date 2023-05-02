import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionHome from '@/components/section-home'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { itemData } = props
  return (
    <HomeV1Wrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <SectionHome roomList={itemData.list} itemWidth="25%" />
      <SectionFooter />
    </HomeV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV1
