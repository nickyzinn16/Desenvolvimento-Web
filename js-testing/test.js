let notaFinal = prompt("Insira a sua nota: ");
console.log(notaFinal);

if (notaFinal < 8) {
    console.log("estas reprovado");
} else if (notaFinal => 8 && notaFinal <= 10) {
    console.log("vais para o exame");
} else {
    console.log("estas aprovado");
}