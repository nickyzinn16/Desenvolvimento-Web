/* Criar um programa que filtre um texto, de forma a evitar a presença de palavras inapropriadas;
 caso alguma palavra proibida seja encontrada, esta deverá 
 ser substituída por cinco asteriscos (*).*/

 /* Criar dois enunciados com um exercicio parecido com esse ou com logica igual*/

function textFilter(text){
    const prohibited = ["Idiota", "Burro", "Parvo"];
    // text = O aluno que faltou e Parvo
    let words = text.split(" ");
    // words = ["O", "aluno", "que", "faltou", "e", "parvo"]
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < prohibited.length; j++){
            if(words[i].toLowerCase() == prohibited[j].toLowerCase())
                words[i]= "*****";
        }
    }
    return datasPrinting(words);
}

function datasPrinting(words){
    let mountedText = "";
    for(let i = 0; i < words.length; i++){
        mountedText = mountedText + words[i] + " ";
    }
    return mountedText;
}

console.log(textFilter("O aluno que faltou e Parvo"));

/* remover o espaco no fim */ 