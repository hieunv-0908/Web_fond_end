let a = +prompt(), b = +prompt(), c = +prompt();
let delta = (b * b) - 4 * a * c;
let x1, x2;

if (delta > 0) {
    x1 = (-b + Math.sqrt(+delta))/2*a;
    x2 = (-b - Math.sqrt(+delta)) / 2 * a
}

alert(x1, x2);