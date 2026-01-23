// crie uma funcao que pede a altura e o peso da pessoa com pelomenos 5 casas decimais, 
// realizar a operacao poara diminuir  numero de casa decimais para duas e depois calcular o imc

function calcularIMC() {
    let altura = prompt("Insira a altura:");
    let peso = prompt("Insira o peso:");


    let altura2 = altura;
    altura2.toFixed(2);

    let peso2 = peso;
    peso2.toFixed(2);

    imc = peso2 / (altura2 * altura2);
    console.log(imc)
}

calcularIMC;

    

