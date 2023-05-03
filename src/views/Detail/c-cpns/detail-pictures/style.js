import styled from 'styled-components'

export const PictureWrapper = styled.div`
  > .pictures {
    height: 600px;
    display: flex;
    background-color: #000;
  }

  /* 派他思想 */
  &:hover {
    /* 首先让所有的cover类都有一个遮盖层 */
    .cover {
      opacity: 1 !important;
    }

    /* 之后让某一个item为hover状态时让它的cover类的遮盖层透明度为0 */
    .item:hover {
      .cover {
        opacity: 0 !important;
      }
    }
  }
  /* .cover {
    opacity: 1 !important;
  }

  .item:hover {
    .cover {
      opacity: 0 !important;
    }
  } */

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`
