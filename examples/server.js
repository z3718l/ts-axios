const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

// 启动server2服务
require('./server2')

// express是一种中间件
const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

// static静态资源目录为当前文件
app.use(express.static(__dirname))

// bodyParser：解析发送过来的body中的数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const router = express.Router()

registerSimpleRouter()

registerBaseRouter()

registerErrorRouter()

registerExtendRouter()

registerInterceptorRouter()

registerConfigRouter()

registerCancelRouter()

registerMoreRouter()

app.use(router)

const port = process.env.PORT || 3000
module.exports = app.listen(port, () => {
  console.log('server is ok')
})

function registerSimpleRouter () {
  router.get('/simple/get', function (req, res) { 
    res.json({
      msg: 'Hello Word'
    })
   })
}
function registerBaseRouter () {
  router.get('/base/get', function(req, res) {
    res.json(req.query)
  })
  router.post('/base/post', function(req, res) {
    res.json(req.body)
  })
  router.post('/base/buffer', (req, res) => {
    let msg = []
    req.on('data', (chunk) => {
      if(chunk) {
        msg.push(chunk)
      }
    })
    req.on('end', () => {
     let buf = Buffer.concat(msg)
     res.json(buf.toJSON())
   })
  })
}
function registerErrorRouter () {
  // error请求测试
  router.get('/error/get', function(req, res) {
    if(Math.random() > 0.5) {
      res.json({
        msg: 'hello word'
      })
    }else{
      res.status(500)
      res.end()
    }
  })
  router.get('/error/timeout', function(req, res) {
    setTimeout(() => {
      res.json({
        msg: 'hello word'
      })
    }, 3000)
  })
}
function registerExtendRouter() {
  router.get('/extend/get', function (req, res) { 
    res.json({
      msg: 'Hello Word'
    })
  })
  router.options('/extend/options', function (req, res) { 
    res.end()
  })
  router.delete('/extend/delete', function (req, res) { 
    res.end()
  })
  router.head('/extend/head', function (req, res) { 
    res.end()
  })
  router.post('/extend/post', function (req, res) { 
    res.json(req.body)
  })
  router.put('/extend/put', function (req, res) { 
    res.json(req.body)
  })
  router.patch('/extend/patch', function (req, res) { 
    res.json(req.body)
  })
}
function registerInterceptorRouter() {
  router.get('/interceptor/get', function (req, res) { 
    res.end('hello word')
  })
}
function registerConfigRouter() {
  router.post('/config/post', function(req, res) {
    res.json(req.body)
  })
}

function registerCancelRouter() { 
  router.get('/cancel/get', function (req, res) {
    setTimeout(() => {
      res.json('hello')
    }, 1000)
  })

  router.post('/cancel/post', function (req, res) {
    setTimeout(() => {
      res.json(req.body)
    }, 1000)
  })
}

function registerMoreRouter() {
  router.get('/more/get', function(req, res) {
    res.json(req.cookies)
  })
}
