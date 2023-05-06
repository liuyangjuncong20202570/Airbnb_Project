import styled from 'styled-components'

export const SectionWrapper = styled.div`
  .content {
    position: relative;
    z-index: 9999;
    color: ${(props) => (props.theme.isAlpha ? '#fff' : '#333')};
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid
      ${(props) => (props.theme.isAlpha ? 'transparent' : 'rgb(238, 238, 238)')};

    .title {
      font-weight: 800;
      font-size: 12px;
    }

    .desc {
      margin-top: 5px;
      color: ${(props) => (props.theme.isAlpha ? '#fff' : '#888')};
    }
  }
`
