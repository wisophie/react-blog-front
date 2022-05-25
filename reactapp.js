const express = require('express')
const app = express()


app.use(express.static('./build'))


app.listen(8086, () => {
  console.log('exress server is running')
})