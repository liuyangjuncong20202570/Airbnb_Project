import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/HomeBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeData } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/HomeSectionV1'
import HomeSectionV2 from './c-cpns/HomeSectionV2'
import { isEmptyO } from '@/utils/isEmptyObject'
import HomeSectionV3 from './c-cpns/HomeSectionV3'
import HomeSectionV4 from './c-cpns/HomeSectionV4'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPrice, highScore, discount, recommand, longfor, plus } =
    useSelector((state) => ({
      goodPrice: state.home.goodPrice,
      highScore: state.home.highScore,
      discount: state.home.discount,
      recommand: state.home.recommand,
      longfor: state.home.longfor,
      plus: state.home.plus
    }))

  useEffect(() => {
    dispatch(fetchHomeData())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [])

  return (
    <HomeWrapper>
      <AppHeader />
      <HomeBanner />
      <div className="content">
        {isEmptyO(discount) && <HomeSectionV2 itemData={discount} />}
        {isEmptyO(recommand) && <HomeSectionV2 itemData={recommand} />}
        {isEmptyO(longfor) && <HomeSectionV3 itemData={longfor} />}
        {isEmptyO(highScore) && <HomeSectionV1 itemData={highScore} />}
        {isEmptyO(goodPrice) && <HomeSectionV1 itemData={goodPrice} />}
        {isEmptyO(plus) && <HomeSectionV4 itemData={plus} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
