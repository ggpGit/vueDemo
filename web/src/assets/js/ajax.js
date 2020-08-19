import axios from 'axios'
let qs = require('qs')

let instance = axios.create({
  baseURL: '',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const ajax = (url, params, method) => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method,
      data: qs.stringify(params)
    }).then(res => {
      console.log(res)
      if (res.data.success === true) {
        resolve(res.data.data)
      } else {
        throw res
      }
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}

export default ajax
