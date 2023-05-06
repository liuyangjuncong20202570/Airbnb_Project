import styled from 'styled-components'

export const ItemWrapper = styled.div`
  margin-top: 15px;
  flex-shrink: 0;
  width: ${(props) => props.itemWidth};
  padding: 0 8px;
  box-sizing: border-box;

  .inner {
    width: 100%;
  }

  .swiper {
    cursor: pointer;
    position: relative;
    .control {
      color: #fff;
      display: none;
    }

    &:hover {
      .control {
        display: flex;
      }
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      height: 10px;
      width: 30%;
      left: 0;
      right: 0;
      z-index: 9;
      margin: 0 auto;

      .dot-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        margin-right: 5px;

        &:last-child {
          margin-right: 0;
        }

        .dot {
          color: #fff;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    .btn {
      position: absolute;
      z-index: 99;
      width: 83px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &.left {
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }

      &.right {
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }

    .left {
      left: 0;
    }

    .right {
      right: 0;
    }
  }

  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    padding: 5px 0;
    font-size: 12px;
    color: ${(props) => props.dyncColor};
  }

  .name {
    color: ${(props) => props.theme.text.primaryColor};
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    padding: 5px 0;
    color: #333;
  }

  .bottom {
    display: flex;
    align-items: center;
    .count {
      padding: 0 5px;
    }
    .extra {
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.theme.text.primaryColor};
    }
  }

  .css-34he1w-MuiRating-decimal {
    margin: 0 -1px;
  }
`
