/* Recebido o nome completo do utilizador, apresentar uma nova versão desse nome com as iniciais em maiúsculas. X*/

function formatName(name){
    let separateWords = name.trim().toLowerCase().split(" ");
    let result = ""
    for(let i = 0; i < separateWords.length; i++){
        if(separateWords[i] != ""){
            let word = separateWords[i];
            result = result + word[0].toUpperCase() + word.slice(1)
        }
    }
    return result;
}