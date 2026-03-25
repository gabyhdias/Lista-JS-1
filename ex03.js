function empresaMawer() {
    let totalGanho = 0;
    let totalGasto = 0;

    for(let i = 1; 1<13; i++){
        let ganho = parseFloat(prompt("Ganho da empresa no mês: "+ i));
        let gasto = parseFloat(prompt("Gasto da empresa no mês: "+ i));
        TotalGanho += ganho;
        TotalGasto += gasto;
    }
}