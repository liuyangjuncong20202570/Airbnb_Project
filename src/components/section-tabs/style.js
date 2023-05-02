import styled from 'styled-components'

export const TabsWrapper = styled.div`
  margin-bottom: 10px;
  .tab {
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 120px;
    flex-shrink: 0;
    font-size: 16px;
    cursor: pointer;
    padding: 15px 16px;
    border: 1px solid #ddd;
    border-radius: 3px;
    ${(props) => props.theme.mixin.boxshadow}

    &:last-child {
      margin-right: 0;
    }
  }

  .active {
    color: #fff;
    background-color: #00768c;
    border: 1px solid #00768c;
  }
`
