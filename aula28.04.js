function processarPedido (numero) {
    if (numero % 2 === 0) {
     console.log("Pedido pronto para entregar!");
} else {
   console.log("Pedido ainda sendo preparando...");
  }
}

// exemplos
processarPedido(2); // Pedido pronto para entrega!
processarPedido(3); // Pedido ainda sendo preparado...

