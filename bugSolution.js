function foo(a, b) {
  if (b === 0) {
    return a;
  } else {
    return foo(b, a % b);
  }
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(15, 5)); // Output: 5
console.log(foo(25, 15)); // Output: 5
console.log(foo(100, 20)); // Output: 20
console.log(foo(100, 10)); // Output: 10
console.log(foo(200, 100)); // Output: 100