
export const makeCart = () => {
    return [];
};
export const addItem = (product, count) => {
  const key = product.name;
  return {[key]:product, count};
};

export const getCost = (data) => {
  let sum = 0;
  for (const product of data) {
    const [key, ...rest] = Object.keys(product);
    sum += product.count * product[key].price;
  }
  return sum;
};

export const getCount = (data) => {
  return data.reduce((acc, product) => {
    return acc + product.count;
  }, 0);
};