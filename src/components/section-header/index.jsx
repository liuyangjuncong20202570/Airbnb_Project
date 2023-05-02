import React, { memo } from 'react'
import { HeaderWrapper } from './styled'
import PropTypes from 'prop-types'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subTitle && <div className="subTitle">{subTitle}</div>}
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader
