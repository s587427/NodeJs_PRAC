const express = require('express')
const path = require('path')

const app = express()


// 在這裡，使用 express.static()方法, 快速的對外提供靜態資源

app.use('/files2', express.static(path.join(__dirname, 'files')))

app.use(express.static(path.join(__dirname, 'clock')))


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})