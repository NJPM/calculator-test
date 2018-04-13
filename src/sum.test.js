const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('can accept 0 numbers', () => {
   expect(sum()).toBe(0); 
});

test('can accept 1 numbers', () => {
   expect(sum(5)).toBe(5); 
});

test('can accept 5 numbers', () => {
   expect(sum(1,1,1,1,1)).toBe(2); 
});



