const jsonString = '{"name": "Jorge", "age": 25, "status": true}';
const users = JSON.parse(jsonString);

console.log(users.name);
console.log(users.age); 
console.log(typeof user); 

const jsonArray = '[1, 2, 3, "quatro", true, null]';
const lista = JSON.parse(jsonArray);

console.log(lista[0]);
console.log(lista[3]);


/* 3 */
 try {
    return JSON.parse(jsonString);
  } 
  catch (erro) 
  {
    console.error('JSON inválido:', erro.message);
    return null;
  }
