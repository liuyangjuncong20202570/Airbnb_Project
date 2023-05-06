import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  &.fixed {
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .content {
    transition: all 250ms ease;
    position: relative;
    z-index: 99;
    padding: 15px 30px;
    background-color: ${(props) =>
      props.theme.isAlpha ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
      border-bottom: 1px solid
        ${(props) => (props.theme.isAlpha ? 'transparent' : '#eee')};
    }

    .search-area {
      height: 100px;
    }
  }

  .cover {
    z-index: 9;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const SearchWrapper = styled.div`
  transition: height 250ms ease;
  height: ${(props) => (props.isSearch ? '100px' : '0')};
`
