const soma = (a, b) => {
  let result = Number(a) + Number(b);

  if(isNaN(result)){
    throw new Error('a e b devem ser números!');
  }

  return result
};

module.exports = soma;