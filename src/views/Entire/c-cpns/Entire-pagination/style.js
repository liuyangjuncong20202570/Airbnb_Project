import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .MuiPaginationItem-page {
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
    color: #fff;
  }
  .desc {
    margin-top: 15px;
    color: #222;
  }
`
