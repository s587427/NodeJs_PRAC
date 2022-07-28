// 這是路由模組

// 1.導入express
const express = require('express')

// 2.創建路由對象
const router = express.Router()

// 3.掛載具體路由
router.get('/user/list', (req, res) => { 
    res.send('Get user list.') 
})
router.post('/user/add', (req, res) => { 
    res.send('Add new user.')
})

// 4.向外導出路由對象

module.exports = router
