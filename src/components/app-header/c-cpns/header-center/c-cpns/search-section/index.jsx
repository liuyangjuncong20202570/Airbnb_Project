import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSection = memo((props) => {
  const { SearchInfos } = props
  return (
    <SectionWrapper>
      <div className="content">
        {SearchInfos.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
})

SearchSection.propTypes = {
  SearchInfos: PropTypes.array
}

export default SearchSection
