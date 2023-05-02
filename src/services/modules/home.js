import LYRequest from '../request/index'

// 获取高性价比数据
export const fetchGoodPriceData = () => {
  return LYRequest.get({
    url: 'home/goodprice'
  })
}

// 获得高评分数据
export const fetchHighScoreData = () => {
  return LYRequest.get({
    url: 'home/highscore'
  })
}

// 获取discount数据
export const fetchDiscountData = () => {
  return LYRequest.get({
    url: 'home/discount'
  })
}

// 获取热门推荐
export const fetchHotRecommandData = () => {
  return LYRequest.get({
    url: 'home/hotrecommenddest'
  })
}

// 获取想去城市数据
export const fetchLongForData = () => {
  return LYRequest.get({
    url: 'home/longfor'
  })
}

// 获取plus房源数据
export const fetchPlusData = () => {
  return LYRequest.get({
    url: 'home/plus'
  })
}
