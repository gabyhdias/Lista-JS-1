let tempo = 10;

const contagemRegressiva = setInterval(() => {
    if (tempo > 0) {
        console.log(tempo + "...");
        tempo--;
    } else {
        console.log("0");
        console.log("Lançamento realizado!");
        clearInterval(contagemRegressiva); 
    }
}, 1000);