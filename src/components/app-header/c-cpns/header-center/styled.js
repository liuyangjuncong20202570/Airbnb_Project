import styled from 'styled-components'

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
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

  .infos {
    width: 850px;
    height: 64px;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.735) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`
