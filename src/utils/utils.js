/**
 * CREATED DATE: 2018/10/6 12:21:45
 * author: Absent Min
 */
export default {
  formateDate(time) {
    if(!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-'
      + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds()
  }
}