console.log("hello world");

function summ(a, b) {
  return a + b;
}

function summ(a, b) {
  return a - b;
}

function sayHi() {
  return new Promise((res) => {
    setTimeout(() => res("hi"), 1000);
  });
}
