/**
 * CREATED DATE: 2018/10/6 15:27:23
 * author: Absent Min
 */
import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function(err, response) {
        // todo
        if(response.status === 'success') {
          resolve(response)
        } else {
          reject(response.message)
        }
      })
    })
  }
  static ajax(options) {
    let loading
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    let baseURL = "https://www.easy-mock.com/mock/5bd8467fa85a60169c8ca976/api"
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseURL,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then(response => {
        console.log(response)
        if (response.status === 200) {
          let res = response.data
          if (res.code === 0) {
            resolve(res)
            if (options.data && options.data.isShowLoading !== false) {
              loading.style.display = 'none'
            }
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data)
        }
      })
    })
  }
}