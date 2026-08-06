const express = require('express'); 
const app = express();
const porta = 3000;

const produtos = [
    { id: 1, nome: "Teclado", valor : 129.99 },
    { id: 2, nome: "Monitor", valor : 987.99 }
]
console.log(produtos)
console.log("=========")
produtos.push({ id : 3, nome : "Mouse", valor : 98.99})
console.log(produtos)

for (let index = 0; index < Array.length; index++) {
    console.log("O valor do index")
}

function ProcuraProduto (id) {
   for (let index = 0; index < produtos.length; index++) {
    const produto = produtos [index]
    
    if (produto.id === 2) {
        console.log(produto)
       }
    }
}

function procuraProdutodoPorNome(nome){
    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].nome.toLowerCase() == nome) {
            console.log(produtos[i]);
        }
    }
}

function procurarProduto(id){
    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].id == Number(id)) {
            console.log(produtos[i]);
        }
    }
}

app.get('/produto/:id', (req, res) => {
    if(!parseInt(req.params.id)){
        res.send("Valor do ID deve ser numérico")
    }
    const id= parseInt(req.params.id);
    procurarProduto(id)
    res.send("foi")

})

app.get('/produto/nome/:nome', (req,res) => {
    const nome = req.params.nome;
    procuraProdutoPorNome(nome)
    res.send("Foi pelo nome")
})

app.post('/produtos',(req, res) => {
    const novoProduto = {
        id: 12,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novoProduto)

    res.status(201).json({
        mensagem: "Produto criado!",
        produto: novoProduto
    })
})

app.listen(porta, () => {
    console.log("Servidor iniciado na porta: " + porta)
})



