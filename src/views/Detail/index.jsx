import React, { memo, useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-pictures'
import PictureBroswer from '@/base-ui/picture_broswer'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const [isShowBroswer, setShowBroswer] = useState(false)
  const dispatch = useDispatch()
  const { itemData } = useSelector(
    (state) => ({
      itemData: state.detail.itemData
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [])

  const showBroswerHandle = () => {
    setShowBroswer(false)
  }

  return (
    <DetailWrapper>
      <AppHeader />
      <DetailPicture />
      <div className="show-btn" onClick={(e) => setShowBroswer(true)}>
        展示更多图片
      </div>
      {isShowBroswer && (
        <PictureBroswer
          closeClick={showBroswerHandle}
          pictureUrls={itemData.picture_urls}
        />
      )}
    </DetailWrapper>
  )
})

export default Detail
