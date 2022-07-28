const express = require('express')

const app = express()

// 導入解析表單數據中間件 body-parser
const parser = require('body-parser')


app.use(parser.urlencoded({ extended: false}))
// app.use(express.urlencoded({ extended: false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})