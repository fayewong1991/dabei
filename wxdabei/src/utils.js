import wepy from 'wepy'

// 保留当前页面的跳转方式
export const goto = (url, isNavigate = true) => {
  if (isNavigate) {
    wepy.navigateTo({
      url: url
    })
  } else {
    wepy.redirectTo({
      url: url
    })
  }
}
