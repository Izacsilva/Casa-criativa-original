
//criado e configurado o servidor utilizando o express
const express = require("express")
const server = express()

// Arry coleção de objetos

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Educação",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt augue sit elit.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt augue sit elit.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercício",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt augue sit elit.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Entretenimento",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt augue sit elit.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt augue sit elit.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Skrap-Arte",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt augue sit elit.",
        url: "https://www.rocketseat.com.br"
    },
]   


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

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }


    return res.render("index.html", { ideas: lastIdeas })

})

server.get("/ideias", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas})
    
})

//liguei meu servidor na porta 3000
server.listen(3000)

//instalado nodemon para automatizar a inicialização do servidor