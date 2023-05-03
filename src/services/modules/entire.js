import LYRequest from '..'

export const fetchEntireRoomList = (offset = 0, size = 20) => {
  return LYRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
