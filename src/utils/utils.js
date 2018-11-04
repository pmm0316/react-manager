/**
 * CREATED DATE: 2018/10/6 12:21:45
 * author: Absent Min
 */
export default {
  formatDate(time) {
    if(!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-'
      + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds()
  },
  pagination(data, callback) {
    let page = {
      onChange:(current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.pageSize,
      total: data.result.total,
      showTotal:() => {
        return `共${data.result.total}条`
      },
      showQuickJumper: true
    }
    return page
  }
}