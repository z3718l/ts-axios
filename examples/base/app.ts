import axios from '../../src/index'

// 参数是数组
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

// 参数是对象
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

// 参数是日期
const date = new Date()
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

// 特殊字符
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

// 有null
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null
  }
})

// 带有hash的 #
axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

// 已经有foo bar
axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    foo: 'bar'
  }
})
