const express = require('express')
bodyParser = require('body-parser')
fs = require('fs')
cookieParser = require('cookie-parser')
mongoose = require('./db')
User = mongoose.User

app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/comment', (req, res) => {
    fs.readFile('./comment.json', 'utf8', (err, data) => {
        if (err) {
            res.json({ error: 0, message: '服务器报错' })
        } else {
            if (req.query.callback) {
                res.send(req.query.callback + '&&' + req.query.callback + '(' + JSON.stringify(data) + ')')
            } else {
                res.set('Access-Control-Allow-Origin', '*')
                res.set('Content-Type', 'text/json')
                data = JSON.parse(data)
                res.json({ data })
            }
        }
    })
})

app.get('/goods', (req, res) => {
    fs.readFile('./goods.json', 'utf8', (err, data) => {
        console.log(req.query.callback)
        if (err) {
            res.json({ error: 0, message: '服务器错误' })
        } else {
            if (req.query.callback) {
                res.send(req.query.callback + '&&' + req.query.callback + '(' + JSON.stringify(data) + ')')
            } else {
                res.set('Access-Control-Allow-Origin', '*')
                res.set('Content-Type', 'text/json')
                data = JSON.parse(data)
                res.json({ data })
            }
        }
    })
})

app.get('/api/brand', (req, res) => {
    fs.readFile('./brand.json', 'utf8', (err, data) => {
        if (err) {
            res.json({ error: 0, message: '服务器错误' })
        } else {
            if (req.query.callback) {
                res.send(req.query.callback + '&&' + req.query.callback + '(' + JSON.stringify(data) + ')')
            } else {
                res.set('Access-Control-Allow-Origin', '*')
                res.set('Content-Type', 'text/json')
                data = JSON.parse(data)
                res.json({ data })
            }
        }
    })
})

// 注册
app.post('/register', (req, res) => {
    req.body.ip = req.ip
    req.body.createTime = new Date()
    var user = new User(req.body)
    user
        .save()
        .then(function(data) {
            res.json({ code: 0, message: '恭喜,注册成功!' })
        })
        .catch(function(err) {
            res.json({ code: 1, message: '对不起,注册失败!' })
        })

})

// 登录
app.get('/login/:username/:password', (req, res) => {
    var name = req.params.username
    var pass = req.params.password
    User
        .findOne({ username: name })
        .exec(function(err, data) {
            console.log(data)
            if (err) {
                res.json({ code: 1, message: '抱歉,系统错误,请稍后再试...' })
            } else {
                if (data) {
                    if (pass == data.password) {
                        res.json({ code: 0, message: '恭喜,登录成功！' })
                    } else {
                        res.json({ code: 1, message: '您输入的密码不正确...' })
                    }
                } else {
                    res.json({ code: 1, message: '您输入的用户名不存在...' })
                }
            }
        })
})

app.listen(3000, () => { console.log('Running') })