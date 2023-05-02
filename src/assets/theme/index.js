// 使用styled-components管理主题颜色
const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a'
  },
  text: {
    primaryColor: '#484848',
    secondaryColr: '#222'
  },
  mixin: {
    boxshadow: `
    transition: box-shadow 250ms ease;
    &:hover{
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }
    `
  }
}

export default theme
