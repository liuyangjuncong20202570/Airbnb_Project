import styled from 'styled-components'

export const FilterWrapper = styled.div`
  position: fixed;
  top: 110px;
  left: 0;
  right: 0;
  z-index: 100;
  margin-left: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .filterTab {
    cursor: pointer;
    margin-right: 15px;
    padding: 8px 16px;
    border: 1px solid #eee;
    border-radius: 3px;
    &:last-child {
      margin-right: 0;
    }

    ${(props) => props.theme.mixin.boxshadow}
  }

  .active {
    color: #fff;
    background-color: ${(props) => props.theme.color.secondaryColor};
  }
`
