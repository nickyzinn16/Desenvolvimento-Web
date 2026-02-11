const pessoa = {
  nome: "Ricky",
  apresentar() {
    console.log(`Meu nome é ${this.nome}.`);
  }
};

pessoa.apresentar();

// 1. Crie um array de objetos com os dados de 5 alunos
//  (nome, morada, notas escolares (precisam ser representadas em array e conter pelomenos 5 notas))
// 1.1 calcule a media de notas de cada aluno
// 1.2 apresenta apenas os alunos com a media superior a 9,5
// 1.3 Implemente uma logica numa funcao que nos permita passar como parametros a chave e o valor que deve
// ser adicionado no objeto inicial