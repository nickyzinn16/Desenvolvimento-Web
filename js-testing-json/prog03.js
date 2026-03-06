const product = {
  id: 101,
  name: 'Lápis',
  price: 800,
  available: true,
  tags: ['eletrônico', 'informática']
};

/*const json = JSON.stringify(product);
console.log(json);

console.log(typeof json); */

const json = JSON.stringify(product, null, 2);
console.log(json);
