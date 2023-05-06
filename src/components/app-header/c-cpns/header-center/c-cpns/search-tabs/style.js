import styled from 'styled-components'

export const TabsWrapper = styled.div`
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.theme.isAlpha ? '#fff' : '#333')};
    .inner {
      width: 326px;
      height: 47px;
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        cursor: pointer;
        box-sizing: border-box;
        height: 40px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        padding: 8px 0px;
        margin-right: 8px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .active {
    border-bottom: 1px solid
      ${(props) => (props.theme.isAlpha ? '#fff' : '#333')};
  }
`
