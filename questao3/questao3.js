/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const fs = require('fs');

function lerFat() {
    fs.readFile('dados.json', 'utf8', (erro, conteudo) => {
        const fatDiario = JSON.parse(conteudo); // recebe de dados.json os faturamentos
        const resultado = analisarFat(fatDiario); // chama a funcao principal
        console.log(`Menor faturamento: R$ ${resultado.menorFat.toFixed(2)}`);
        console.log(`Maior faturamento: R$ ${resultado.maiorFat.toFixed(2)}`);
        console.log(`Média: R$ ${resultado.mediaFat.toFixed(2)}`);
        console.log(`Dias acima da média: ${resultado.acimaMedia}`);
    });
}

function analisarFat(fatDiario) {
    const fatSemDiasZerados = fatDiario
        .map(entry => entry.valor)
        .filter(valor => valor > 0);

    const menorFat = Math.min(...fatSemDiasZerados);
    const maiorFat = Math.max(...fatSemDiasZerados);

    const somaFat = fatSemDiasZerados.reduce((acc, valor) => acc + valor, 0);
    const mediaFat = somaFat / fatSemDiasZerados.length;

    const acimaMedia = fatSemDiasZerados.filter(valor => valor > mediaFat).length;

    return {
        menorFat,
        maiorFat,
        mediaFat,
        acimaMedia
    };
}
// no console: node questao3.js
lerFat();
