console.log('tjo');
/**
 * This function adds 2 numbers together
 *
 *
 */
function addNumbers(a, b) {
  return a + b;
}

const greetUserDiv = document.querySelector('.greet-user');

/**
 *
 * This will greet the user, using their
 * username and id
 *
 */

function greetUser(username, id) {
  return `<p>Hello ${username} your id number is ${id}</p>`;
}

const result = greetUser('Ola', 10);
console.log(result);

greetUserDiv.innerHTML = greetUser('emil', 30);

// example 3 @param

/**
 * This function adds 3 numbers together
 * @param {number} a first number
 * @param {number} b second number
 * @param {number} c third number
 * @example
 * ```
 * adds a + b + c
 * ```
 * @returns
 */
function addingThreeNumbers(a, b, c) {
  return a + b + c;
}

addingThreeNumbers(20, 30, 60);

// example 4 @returns

/**
 * Typing out 4 cat names as HTML in an UL with 4 li items
 * @param {string} cat1 first value
 * @param {string} cat2 second value
 * @param {string} cat3 third value
 * @param {string} cat4 fourth value
 * @returns {string} list of cat names
 * @example
 * ```
 *adds <ul>
    <li>${cat1}</li>
    <li>${cat2}</li>
    <li>${cat3}</li>
    <li>${cat4}</li>
</ul>
 * ```
 */
function addFourCats(cat1, cat2, cat3, cat4) {
  return `<ul>
    <li>${cat1}</li>
    <li>${cat2}</li>
    <li>${cat3}</li>
    <li>${cat4}</li>
    </ul>`;
}

greetUserDiv.innerHTML += addFourCats('Gunnar', 'Håkan', 'Jackie', 'Lennart');

// Optional parameters

/**
 * Multiply two number together
 *
 * @param {number} a first value
 * @param {number} [b] second value
 * @returns multiplication of numbers
 */
function multiplyNumbers(a, b = 10) {
  return a * b;
}
