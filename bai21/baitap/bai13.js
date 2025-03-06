let n = 8;

document.write("<h3>a.</h3>");
for (let i = 1; i <= n; i++) {
    document.write("*".repeat(i) + "<br>");
}

document.write("<h3>b.</h3>");
for (let i = n; i >= 1; i--) {
    document.write("*".repeat(i) + "<br>");
}

document.write("<h3>c.</h3>");
for (let i = 1; i <= n; i++) {
    document.write("&nbsp;".repeat((n - i) * 2) + "*".repeat(i) + "<br>");
}

document.write("<h3>d.</h3>");
for (let i = n; i >= 1; i--) {
    document.write("&nbsp;".repeat((n - i) * 2) + "*".repeat(i) + "<br>");
}
