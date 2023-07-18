const stringLength = require('./stringLength'); // Test with the stringLength file.

it('length of string', () => { // Test with a string with one character. 
  expect(stringLength('laptop')).toBe(6);
});

it('length of string', () => { // Test with a string with multiple characters. 
  expect(stringLength('')).toBe('string is beyond interval');
});
