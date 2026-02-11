// 1. Crie um array de objetos com os dados de 5 alunos
//  (nome, morada, notas escolares (precisam ser representadas em array e conter pelomenos 5 notas))
// 1.1 calcule a media de notas de cada aluno
// 1.2 apresenta apenas os alunos com a media superior a 9,5
// 1.3 Implemente uma logica numa funcao que nos permita passar como parametros a chave e o valor que deve
// ser adicionado no objeto inicial

let soma = 0;
let alunos = [
  {
    nome: "Liunel Messi",
    morada: "Campim",
    notas: [16, 14, 18, 11, 13]
  },
  {
    nome: "Neymar Jr.",
    morada: "Salamansa",
    notas: [8, 9, 7, 10, 6]
  },
  {
    nome: "Cristiano Ronaldo",
    morada: "Assomada",
    notas: [15, 16, 14, 13, 17]
  },
  {
    nome: "Kilyan Mbappe",
    morada: "janela",
    notas: [9, 10, 8, 7, 11]
  },
  {
    nome: "Lamine Yamal",
    morada: "Ilha madeira",
    notas: [19, 20, 17, 15, 19]
  }
];

// 1.1
function calcularMedia(notas) {
    for (let i in notas) {
        soma += notas[i];
    }
    return soma / notas.length;
}

for (let i in alunos) {
    alunos[i].mediaNotas = calcularMedia(alunos[i].notas);
}

console.log(alunos);

//1.2
for(let i in alunos){
if(mediaNotas(i) > 9.5)
    console.log(`Alunos com media superior a 9,5: ${alunos}`);
}
