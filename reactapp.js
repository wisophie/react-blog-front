const express = require('express')
var fs = require('fs')
var https = require('https')
var http = require('http');
const compression = require('compression')
const app = express()

//同步读取密钥和签名证书
var options = {
  key: fs.readFileSync('./ssl/wispw.com.key'),
  cert: fs.readFileSync('./ssl/wispw.com_bundle.crt')
}


app.use(compression())
app.use(express.static('./build'))
app.use((req, res) => {
  fs.readFile(__dirname + '/build/index.html', (err, data) => {
    if (err) {
      console.log(err)
      res.send('后台错误')
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.end(data)
    }
  })
})
var httpsServer = https.createServer(options, app);
var httpServer = http.createServer(app);

httpServer.on('request', (req, res) => {
  console.log(req.url);

  if (req.url === '/')
    res.writeHead(301, {
      'Location': 'https://www.wispw.com'
    });
  res.end("hi");
}).listen(80, () => {
  console.log('http server is running')
});

httpsServer.listen(443, () => {
  console.log('https server is running')
});