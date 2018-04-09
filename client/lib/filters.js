import moment from 'moment'
moment.locale('zh-cn')

const formatTime = (time) => {
  return moment(time).startOf('day').fromNow()
}

export {
  formatTime,
}
