/**
 * @return {Function}
 */
function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}
const f1 = createHelloWorld();
console.log(f1()); // Output: "Hello World"

// Example 2:
const f2 = createHelloWorld();
console.log(f2({}, null, 42)); // Output: "Hello World"
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */