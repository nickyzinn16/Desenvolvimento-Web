/* Cria um programa que vai mostra a posição de uma determinada palavra esta num texto*/

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
}
