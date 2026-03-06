const user = {
  id: 1,
  name: 'Diego',
  pass: '#asiBD12',
  email: 'diego@email.com'
};

const jsonSeguro = JSON.stringify(user, ['id', 'name', 'email'], 2);
console.log(jsonSeguro);

const jsonFiltrado = JSON.stringify(user, (chave, valor) => {
  if (chave === 'pass') return undefined; 
  return valor;
});
