import styled from 'styled-components'

export const PictureWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    width: 100%;
    height: 86px;
    .close {
      position: absolute;
      right: 25px;
      top: 15px;
      cursor: pointer;
    }
  }

  .content {
    flex: 1;
    .control {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        cursor: pointer;
        width: 83px;
        height: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .picture_container {
        position: relative;
        overflow: hidden;
        flex: 1;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          z-index: 999;
          margin: 0 auto;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          bottom: 0;
          right: 0;
          user-select: none;
          max-width: 105vh;
        }
      }
    }
  }

  .preview {
    transform: translateY(0px);
    transition: all 200ms ease;
    margin-top: 10px;
    height: 100px;
    display: flex;
    justify-content: center;
    .info {
      width: 100%;
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      display: flex;
      flex-direction: column;

      .desc {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .toggle {
          cursor: pointer;
        }
      }

      .list {
        transition: height 300ms ease;
        height: ${(props) => (props.showPreview ? '67px' : '0px')};
        display: flex;
        .item {
          cursor: pointer;
          height: 67px;
          width: 100px;
          flex-shrink: 0;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  /* 动画实现 */
  .pic-enter {
    transform: translateX(${(props) => (props.isNext ? '100%' : '-100%')});
    opacity: 0;
  }

  .pic-enter-active {
    transform: translate(0);
    opacity: 1;
    transition: all 200ms ease;
  }

  .pic-exit {
    opacity: 1;
  }

  .pic-exit-active {
    opacity: 0;
    transition: all 200ms ease;
  }
`
