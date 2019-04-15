const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcccccccd')).toEqual('c');
});

test('Works with numbers in the string', () => {
  expect(maxChar('apple 1231111')).toEqual('1');
});
