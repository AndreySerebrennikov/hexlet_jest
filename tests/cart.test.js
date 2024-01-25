import { makeCart, addItem, getCost, getCount } from "../src/cart";

test( 'cart', () => {
    let cart = makeCart();
    expect(cart).toHaveLength(0);

    const car = { name: 'car', price: 3 };
    cart.push(addItem(car, 5));
    expect(cart).toEqual(expect.arrayContaining([{car, count: 5}]));
    expect(getCost(cart)).toEqual(15);
    
    const house = { name: 'house', price: 10 };
    cart.push(addItem(house, 2));
    expect(cart).toEqual(expect.arrayContaining([{car, count: 5}, {house, count: 2}]));
    expect(getCost(cart)).toEqual(35);
    expect(getCount(cart)).toEqual(7);
});

