import styled from 'styled-components'

export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${new URL('@/assets/img/cover_01.jpeg', import.meta.url).href})
    center / cover;
`
