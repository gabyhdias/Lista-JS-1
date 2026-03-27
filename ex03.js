function Mawer(){
    let TotalGasto = 0;
    let TotalGanho = 0;

    for(let i = 1; i<13; i++){
        let ganho = parseFloat(prompt("Qual foi o ganho da empresa no mês  " + i));
        let gasto = parseFloat(prompt("Qual foi o gasto da empresa no mês  " + i));
        TotalGanho += ganho;
        TotalGasto += gasto;
    }
    lucro = TotalGanho - TotalGasto;
    alert("ganho bruto anual: " + TotalGanho);
    alert("Gasto anual: " + TotalGasto);
    alert("Saldo financeiro anual: " + lucro);

    if (lucro > 0){
        alert("você teve um lucro de " + lucro);
    } else {
        alert("você teve um prejuízo de " + lucro);
    }
}