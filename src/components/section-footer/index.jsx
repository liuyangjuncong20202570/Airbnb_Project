import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let ShowMessage = '显示更多'
  if (name) {
    ShowMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()
  const moreClickHandle = () => {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={name ? '#00848a' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{ShowMessage}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
