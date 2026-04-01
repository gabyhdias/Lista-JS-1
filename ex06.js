function alfabeto() {
    let letra = prompt("Digite uma letra").toLowerCase();
     if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        alert("Sua letra é uma vogal");
    } else {
        alert("Sua letra é uma consoante");
    }
}