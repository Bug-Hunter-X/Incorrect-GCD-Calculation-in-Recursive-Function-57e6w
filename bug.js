function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: true
console.log(foo(15, 5)); // Output: true
console.log(foo(25, 15)); // Output: true
console.log(foo(100, 20)); // Output: true
console.log(foo(100, 10)); // Output: false (Incorrect, should be true)
console.log(foo(200, 100)); // Output: false (Incorrect, should be true)