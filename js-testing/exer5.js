/* Criar um programa para validar um endereço de email, certificando-se de que contém  o caractere “@” e 
termina com uma sequência de 2 a 3 caracteres.X*/

/* let nome = prompt("Insira o seu nome:");
let apelido = prompt("Insira o seu apelido:");
let empresa = prompt("Insira o nome da empresa:");
empresa = empresa.replace(“ ”, "");

const nacionalidades = ["Português", "Caboverdiano", "Brasileiro"];

do {
let nacionalidade = prompt("Insira a sua nacionalidade (Opções: Português, CaboVerdiano, Brasileiro: ");
while (nacionalidade != nacionalidades)
}

let extensao = nacionalidade === "Português" ? ".pt" : nacionalidade === "CaboVerdiano" ? ".cv" : ".br";

let email = “${nome}.${apelido}@${empresa}${extensao}”;

alert(“Email gerado: ${email}”); */

function validateEmal(email){
    return;
}

const lastDot = email.lastIndexOf(".");
if(lastDot == -1){
    console.log("Email nao e valido, inclua o ponto  antes da extensao")
    return;
}

const extention = email.slice(lastDot+1);

if (extention.length >= 2 && extention.length <=3)
    console.log("O email bem valido")
else
    console.log("Extensao nvaliida")





