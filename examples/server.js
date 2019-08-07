const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

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

const router = express.Router()
router.get('/simple/get', function (req, res) { 
  res.json({
    msg: 'Hello Word'
  })
 })

 app.use(router)

 const port = process.env.PORT || 3000
 module.exports = app.listen(port, () => {
  console.log('server is ok')
})
