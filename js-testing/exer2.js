/* Cria um programa que vai mostra a posição de uma determinada palavra esta num texto

let texto = "JavaScript eh uma forma de adquirir conhecimentos e aplicalas no futuro para ganhar dinheiro";

let java = "Javascript";

let palavra = texto.split("");

let posicao = palavra.indexOf(java);

if (posicao !== -1) 
    {
    console.log("JavaScript esta na posicao", posicao);
} 
else 
    {
    console.log("palavra nao encontrada");
} */

const text = "Os alunos do futuro querem o futuro."
let targetWord = "futuro";

let position = 0;

while(true){
    let foundPos = text.indexOf(targetWord, position);
    if(foundPos == -1) break;
    console.log(`A palavra ${targetWord} encontrada em ${position}`);
    position = foundPos + 1;
}
