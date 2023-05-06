import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )
  const { isFixed, topAlpha } = headerConfig

  const coverHandle = () => {
    setIsSearch(false)
  }

  // 滚动的监听
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 当页面在正常滚动时，也就是搜索框没有弹出的情况下
  // 随时记录scrollY的值
  if (!isSearch) prevY.current = scrollY
  // 一旦弹出来了搜索框，就停止记录并且开始计算之间的相对值
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
  // 划到顶部是否设为透明
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            {/* 此处的isAlpha可以先判断只要当页面滚动到页面顶部时，就设置为true */}
            {/* 这样可以保证只要页面在页面顶部时就能显示search页面 */}
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              SearchHandle={setIsSearch}
            />
            <HeaderRight />
          </div>
          <SearchWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && <div className="cover" onClick={coverHandle}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
