const stringLength = (string) => { // Initialize a counter to 0.
    if (string.length > 0 && string.length < 10) { // Iterate over the characters in the string.
      return string.length; // Return the number of characters
    }
    return 'string is beyond interval';
  };
  
  module.exports = stringLength;