import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './styled'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const HeaderRight = memo(() => {
  const [showPannel, setShowPannel] = useState(false)

  useEffect(() => {
    function windowClickHandle() {
      setShowPannel(false)
    }
    window.addEventListener('click', windowClickHandle)
    return () => {
      window.removeEventListener('click', windowClickHandle)
    }
  }, [])

  const showPannelHandle = (e) => {
    e.stopPropagation()
    setShowPannel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <IconGlobal />
      </div>
      <div onClick={showPannelHandle} className="profile">
        <IconProfileMenu />
        <IconProfileAvatar />
        {showPannel && (
          <div className="pannel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
