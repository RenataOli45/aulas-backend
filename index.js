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

app.get('/produto/:id', (req, res) => {
    if(!parseInt(req.params.id)){
        res.send("Valor do ID deve ser numérico")
    }
    const id= parseInt(req.params.id);
    ProcurarProduto(id)
    res.send("foi")

})

app.listen(porta, () => {
    console.log("Servidor iniciado na porta: " + porta)
})



