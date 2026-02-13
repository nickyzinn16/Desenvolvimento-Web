// Exemplo de navegação
const body = document.body;

// Acessando o primeiro filho elemento do body
const primeiroFilho = body.firstElementChild;
console.log(primeiroFilho.tagName); // Ex: "H1"

// Acessando o pai do primeiro filho
console.log(primeiroFilho.parentNode === body); // true
