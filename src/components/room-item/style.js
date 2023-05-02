import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${(props) => props.itemWidth};
  padding: 0 8px;
  box-sizing: border-box;

  .inner {
    width: 100%;
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
