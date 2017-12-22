const mongoose = require('mongoose')
mongoose.Promise = Promise

//------------ 连接数据库------------
var db = mongoose.connect('mongodb://localhost/appMall').connection

// ------------获取数据连接状态------
db.on('open', function() {
    console.log('数据库连接成功')
})
db.on('error', function() {
    console.log('数据库连接失败')
})

// --------建立用户信息数据库模式
var Schema = mongoose.Schema
var userSchema = new Schema({
    username: String,
    password: String,
    createTime: Date,
    ip: String
})

var User = mongoose.model('User', userSchema)

module.exports = { User }