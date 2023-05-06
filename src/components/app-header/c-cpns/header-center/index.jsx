import React, { memo, useState } from 'react'
import { CenterWrapper } from './styled'
import SearchData from '@/assets/data/search_titles.json'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchSection from './c-cpns/search-section'
import { CSSTransition } from 'react-transition-group'
import detail from '@/store/modules/detail'

const HeaderCenter = memo((props) => {
  const { isSearch, SearchHandle } = props
  const titles = SearchData.map((item) => item.title)
  const [currentIndex, setCurrentIndex] = useState(0)

  const searchBarHandle = () => {
    if (SearchHandle) SearchHandle(true)
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit>
        <div className="search-bar" onClick={searchBarHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        timeout={250}
        classNames="detail"
        unmountOnExit>
        <div className="search-detail">
          <SearchTabs onTabClick={setCurrentIndex} titles={titles} />
          <div className="infos">
            <SearchSection SearchInfos={SearchData[currentIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
