import styled from 'styled-components'

export const RoomWrapper = styled.div`
  margin-top: 144px;
  position: relative;
  .title {
    font-size: 22px;
    font-weight: 700;
    padding: 15px 8px;
  }
  .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .bg-cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
