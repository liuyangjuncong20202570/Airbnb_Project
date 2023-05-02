import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  .contain {
    position: relative;
    .cover {
      border-radius: 3px;
      overflow: hidden;
      width: 180px;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
      }
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }

    .bg-cover {
      border-radius: 3px;
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 90%;
      height: 100%;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }

    .desc {
      color: #fff;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      bottom: 20px;
      margin-left: -20px;
      left: 0;
      right: 0;
      .city {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .price {
        font-size: 14px;
      }
    }
  }
`
