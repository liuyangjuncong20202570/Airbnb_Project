import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  .btns {
    margin-right: 20px;
    display: flex;
    width: 150px;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
  }

  .profile {
    position: relative;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 50px;
    display: flex;
    width: 70px;
    padding: 4px 0px 4px 6px;
    justify-content: space-around;
    align-items: center;
    ${(props) => props.theme.mixin.boxshadow};

    .pannel {
      background-color: #fff;
      position: absolute;
      right: 0;
      top: 50px;
      width: 240px;
      border-radius: 10px;
      color: #666;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      .top,
      .bottom {
        padding: 8px 0px;
        .item {
          padding: 8px 16px;
          height: 40px;
          line-height: 40px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`
