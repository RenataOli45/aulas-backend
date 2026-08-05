for (let i= 0; i < 5 ; 1++) (
    console.log ("Limpando mesa: " + i)
)

function statusCozinha(){
    for (let index = 1; index < 20; index ++) {
        if(index % 2 ==0) {
            console.log("pedido VIP saindo!")
        } else {
            console.log("pedido comum pronto.")
        }
    }
}

statusCozinha()