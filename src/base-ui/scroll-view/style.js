import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  .control {
    cursor: pointer;
    position: absolute;
    height: 28px;
    width: 28px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    top: 50%;
    border: 2px solid #eee;
    transform: translateY(-50%);
    ${(props) => props.theme.mixin.boxshadow}
  }

  .right {
    right: -10px;
  }

  .left {
    left: -10px;
  }

  .scroll {
    overflow: hidden;
    .scroll-content {
      position: relative;
      display: flex;
      align-items: center;
      transition: all 300ms ease;
    }
  }
`
