/* Dada uma palavra, verificar se esta contém uma determinada letra escolhida pelo utilizador e,
 em seguida, informar a posição dessa letra na palavra. */

let palavra = "administracao";
let letra = prompt("Insira uma letra que desejas encontrar na palavra:");

let encontrada = false;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        console.log("lera na posicao ${i}");
        encontrada = true;
    }
}

if (!encontrada) {
    console.log("A letra não existe na palavra.");
}
