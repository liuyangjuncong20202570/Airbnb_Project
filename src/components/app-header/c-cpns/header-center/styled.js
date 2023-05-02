import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search-bar {
    padding: 0px 8px 0px 20px;
    box-sizing: border-box;
    width: 300px;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 50px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxshadow}
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
    .text {
      color: #222;
      font-weight: 600;
    }
  }
`
