/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function invertString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) { // adiciona no invertedString a string de trás pra frente
        invertedString += string[i];
    }
    return invertedString;
}
const stringOriginal = "subi no onibus em marrocos";
const stringInvertida = invertString(stringOriginal);
console.log(`String original: "${stringOriginal}"`);
console.log(`String invertida: "${stringInvertida}"`);