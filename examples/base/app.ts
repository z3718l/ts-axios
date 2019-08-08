import axios from '../../src/index'

// 参数是数组
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// 参数是对象
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// 参数是日期
// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// 特殊字符
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// 有null
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// 带有hash的 #
// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// 已经有foo bar
// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     foo: 'bar'
//   }
// })


/**
 * post请求
 */

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// }) 

// 返回json字符串
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    c: 3
  }
}).then((res) => {
  console.log(res)
})

// responseType: 'json', 返回的就是json对象
axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 15,
    c: 33
  }
}).then((res) => {
  console.log(res)
})

// 浏览器会自动为我们添加content-type，让服务端能够解析
// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })

// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// }) 
