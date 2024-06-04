/* Desenvolva aqui a rotina */
const button = document.getElementById("btn_calcular")
// console.log(button)
button.addEventListener('click', ()=>{
    // RECEITAS:
    const valorBase = parseFloat(document.getElementById('valor_base').value);
    const ajudaComTransporte = parseFloat(document.getElementById('valor_transporte').value);
    const ajudaAlimentacao = parseFloat(document.getElementById('valor_alimentacao').value);
    let valorTotal = valorBase + ajudaComTransporte + ajudaAlimentacao
    
    const receitaTotal = document.getElementById('valor_receita')
    receitaTotal.value = valorTotal
    // console.log(receitaTotal)

    // ----------------------------------------------------------------------
    
    // DESCONTOS:
    const descontoDeAutomovel = parseFloat(document.getElementById('valor_automovel').value);
    const faltas = parseFloat(document.getElementById('faltas').value);

    let valorTotalDosDescontos = descontoDeAutomovel + faltas
    
    const descontosTotais = document.getElementById("valor_descontos")
    descontosTotais.value = valorTotalDosDescontos

    // // ----------------------------------------------------------------
    
    // // Total

    let valorGeral = valorTotal - valorTotalDosDescontos
    const total = document.getElementById("valor_total")
    total.value = valorGeral
})