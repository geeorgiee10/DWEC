let num = Math.random(2);
document.write(num);
let num2 = parseInt(Math.random() * (200 - 100) + 100);
document.write("<br>"+ num2);
let num3 = parseInt(prompt("Dame el primer numero"));
let num4 = parseInt(prompt("Dame el segundo numero"));
document.write("<br>"+ parseInt(Math.random() * (num4 - num3) + num3));