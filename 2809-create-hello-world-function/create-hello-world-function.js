function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

// Example 1:
const f1 = createHelloWorld();
console.log(f1()); // Output: "Hello World"

// Example 2:
const f2 = createHelloWorld();
console.log(f2({}, null, 42)); // Output: "Hello World"
