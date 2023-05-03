import React, { memo } from 'react'
import { LeftWrapper } from './styled'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const logoClickHandle = () => {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
