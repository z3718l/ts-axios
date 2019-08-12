const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extends: true
}))
app.use(cookieParser)

const router = express.Router()

const cors = {
  'Access-Control-Allow-Origin': 'http://localhost:3001',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

// 对于跨域请求，一般会先发一个options请求，再发post请求
router.post('/more/server2', function (req, res) {
  res.set(cors)
  res.json(req.cookies)
})

router.options('/more/server2', function (req, res) {
  res.set(cors)
  res.end()
})

app.use(router)

const port = 3001
module.exports = app.listen(port)
