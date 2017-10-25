const compose = f => g => x => f(g(x));
const add = a => b => a + b;
const multiply = a => b => a * b;
const add2 = add(2);
const multiplyBy3 = multiply(3);
const add2ThenMultiplyBy3 = compose(multiplyBy3)(add2);

console.log(add2ThenMultiplyBy3(10));

