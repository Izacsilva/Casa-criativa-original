
//criado e configurado o servidor utilizando o express
const express = require("express")
const server = express()

//configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))


//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //boolean
})

//criado rota /
// capturando o pedido do cliente para responder
server.get("/", function(req, res) {
   
    return res.render("index.html")

})

server.get("/ideias", function(req, res) {
    return res.render("ideias.html")
    
})

//liguei meu servidor na porta 3000
server.listen(3000)

//instalado nodemon para automatizar a inicialização do servidor