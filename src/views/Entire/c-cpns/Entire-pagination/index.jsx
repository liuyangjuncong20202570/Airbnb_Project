import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import { changeCurrentPageAction } from '@/store/modules/entire/createActions'
import { fetchRoomList } from '@/store/modules/entire/createActions'

const EntirePagination = memo((props) => {
  const dispatch = useDispatch()
  const { currentPage, totalCount } = props
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  const paginationHandle = (event, totalCount) => {
    // 更新页码
    // dispatch(changeCurrentPageAction(totalCount - 1))
    // 获取最新数据
    // 回到顶部
    window.scrollTo(0, 0)
    dispatch(fetchRoomList(totalCount - 1))
  }

  return (
    <PaginationWrapper>
      <div className="pagination">
        <Pagination count={totalPage} onChange={paginationHandle} />
      </div>
      <div className="desc">
        第{startCount}-{endCount}个房源，共超过{totalCount}个
      </div>
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number
}

export default EntirePagination
