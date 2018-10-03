"use strict"

function g(num1, num2) {
    console.log("g", this, num1, num2);
}

g();

const f = g.bind(123, 1);

f(2);
