let name = `Adilson Gomes`;
let course = `ASGBD`;
let msg = `Seja Bem Vindo`;
let classification = 15;

let finalDatas = `Sr. ${name}, seja muito bem vindo ao curso de ${curso} seu filho teve ${classification} valores`

console.log(finalDatas.charAt(4));
console.log(finalDatas.length);




















/* Recebido o nome completo do utilizador,
 apresentar uma nova versão desse nome com as iniciais em maiúsculas. */

let nomeusuario = "ricardo david bans leite dos santos";

let nome = nomeusuario.split("");

for (let i = 0; i < nome.length; i++) {
    nome[i] = nome[i][0].toUpperCase() + nome[i].slice(1);
}

console.log(nome);