# JavaScript Testing Practice using JEST 
> In this exercise, I have written several practical tests for JavaScript functions using the Jest library. This execrise also ensures that the AAA pattern is followed accordingly to make these tests easier for other developers to read and understand. I also used the TDD approach in practice.

## Test run guid
Performed the following steps on your terminal:
- Install dependencies using `npm install -y`
- To run the jest tests, run `npm run watch`

## List of Completed Jest Tests
### String Length Test
- The [sting-length.js](string-length.js) file contains a `stringLength(string)`function that takes any string as an argument and returns its characters count.
- The `stringLength()` function checks if the string is at least 1 character long and not longer than 10 characters.
- The [string-length.test.js](string-length.test.js) contains tests for `stringLength()` function and throw errors if the above conditions are not met.

### Reverse String Test
- The [reverse-string.js](reverse-string.js) file contains a `reverseString(string)`function that take a string as an argument and return it reversed.
- The [reverse-string.test.js](reverse-string.test.js) contains tests for `reverseString(string)` function.

### Simple Calculator Test
- The [calculator.js](calculator.js) file contains a `Calculator` Class that have 4 methods: `add`, `subtract`, `divide`, and `multiply`.
- The `add`, `subtract`, `divide`, and `multiply` methods perform addition, subtract, divide, and multiply operations while accepting two arguments. 
- The [calculator.test.js](calculator.test.js) contains tests for `Calculator` Class methods and throw errors if only one argument or no arguments are provided.

### Capitalize String Test
- The [capitalize-string.js](capitalize-string.js) file contains a `capitalize(string)`function that takes a string as an argument and returns that string with the first character capitalized.
- The [capitalize-string.test.js](capitalize-string.test.js) contains tests for `capitalize(string)` function.

## Author
👤 **Mohamed Aden Ighe**
- GitHub: [@katarighe](https://github.com/katarighe)
- Twitter: [@katarighe](https://twitter.com/katarighe)
- LinkedIn: [@mighe](https://linkedin.com/in/mighe)

## Show your support

Give a ⭐️ if you like this project!

## 🙏 Acknowledgments

- My coding partners for helping me guide the project development
- Project supervised by [Microverse](https//www.microverse.org/) 
- [Creative Commons 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/)

## 📝 License
This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._
