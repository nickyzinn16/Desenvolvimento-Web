/* JSON.parse() - Reviver*/
const json = '{"name": "Carlos", "birth": "1995-06-15T00:00:00.000Z"}';

const obj = JSON.parse(json, (chave, valor) => {
  if (chave === 'birth') {
    return new Date(valor);
  }
  return valor;
});

console.log(obj.birth instanceof Date);
console.log(obj.bith.getFullYear());
