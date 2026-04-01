function numero() {
    let numero = parseInt(prompt("Informe um número inteiro: "));
    if (numero % 2 === 0) {
        numero += 1; 
        console.log("O número era par e agora está ímpar: " + numero);
    } else {
        numero = numero + 1; 
        console.log("O número era ímpar e agora está par: " + numero);
    }
}