import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  > * {
    flex-shrink: 0;
  }
  .I-content {
    transition: all 200ms ease;
    display: flex;
    position: relative;
  }
`
