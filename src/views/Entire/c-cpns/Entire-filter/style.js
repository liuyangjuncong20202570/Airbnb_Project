import styled from 'styled-components'

export const FilterWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
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
