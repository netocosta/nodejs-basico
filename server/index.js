const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.readFile('../client/index.html', function (error, content) {
            res.end(content)
        })
    }

    if (req.url === '/teste') {
        res.end('Ok!')
    }

})

server.listen(8080)

console.log("Servidor executando na porta 8080")