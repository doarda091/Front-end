var n1 = (prompt("Digite a sua primeira nota: "));
var n2 = (prompt("Digite a sua segunda nota: "));
var n3 = (prompt("Digite a sua terceira nota: "));

var p1 = 2;
var p2 = 3;
var p3 = 5;

var MP = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

console.log("A média ponderada das notas do aluno são: "+ MP)