/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
 escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
 se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código 
*/

function isFibonacci(n){
    // primeiros números
    let n1 = 0;
    let n2 = 1;

    if(n == n1 || n == n2){
        return `O número ${n} pertence à sequência de fibonacci'` 
    }else{
        while (n2 < n) {
            // lógica para que n2 sempre receba a soma dele com o número anterior, aux sempre será o número anterior na próxima operação
            let aux = n2;
            n2 = n1 + n2;
            n1 = aux;
        }
        // a sequencia para quando o numero escolhido passar pelo while, se o número for o último da lista, é fibonacci
        if (n2 == n) {
            return `O número ${n} pertence à sequência de Fibonacci.`;
        } else {
            return `O número ${n} não pertence à sequência de Fibonacci.`;
        }
    }
};

// aplicação prática 
console.log(isFibonacci(-1));