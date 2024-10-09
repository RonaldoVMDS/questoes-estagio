/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

function calcPercentual(){
    const dist_fat = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };
    const fatTotal = Object.values(dist_fat).reduce((acc, valor) => acc + valor, 0);
    percentual = {}
    for (const estado in dist_fat){
        const valor = dist_fat[estado];
        percentual[estado] = ((valor / fatTotal) * 100).toFixed(2) // armazena em um objeto seu respectivo percentual
    }
    console.log(`Faturamento total: R$ ${fatTotal}`);
    console.log(`Faturamento percentual por estado: `);
    for (const estado in percentual) {
        console.log(`${estado}: ${percentual[estado]}%`);
    }
}

calcPercentual();
