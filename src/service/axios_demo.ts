import axios from 'axios'

//axios实例
// axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
//   console.log(res)
// })

//4 axios配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 60 * 1000
// axios.defaults.headers = {}

//2. get请求并且传入参数
// axios
//   .get('/get', {
//     params: {
//       name: ' text',
//       age: 18
//     }
//   })
//   .then(res => {
//     console.log(res)
//   })

// // 3post请求
// axios
//   .post('post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then(res => {
//     console.log(res)
//   })

//5. axios.all -> 多个请求一起返回
// axios
//   .all([
//     axios.get('/get', { params: { name: 'whyxxx', age: 18 } }),
//     axios.post('/post', { data: { name: 'why', age: 18 } })
//   ])
//   .then(res => {
//     console.log(res, '返回一个数组')
//   })

//6. axios的拦截器
// fn1: 请求成功会执行函数
// fn2: 请求失败会执行函数
//axios.interceptors.use(fn1, fn2)
axios.interceptors.request.use(
  config => {
    //想做一些操作
    //1 给请求添加token
    //2 isloading动画
    console.log('请求成功的拦截')
    return config
  },
  err => {
    console.log('请求发送错误')
    return err
  }
)

//axios.interceptors.response(fn1, fn2)
// fn1: 数据响应成功（服务器正常返回了数据）
axios.interceptors.response.use(
  res => {
    console.log('响应成功的拦截')
    return res
  },
  err => {
    console.log('服务器响应失败')
    return err
  }
)
