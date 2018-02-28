module.exports = function solveEquation(equation) {
  // your implementation
  var c2,x1,x2,d,a,b,c;
a = Number(equation.match(/\-?\d+/));
c2 = equation.match(/(\- )?\d+/g);
b = (c2[2]);
c = (c2[3]);
b = Number(b.replace(/\s/g, ""));
c = Number(c.replace(/\s/g, ""));
d = b * b - 4 * a * c;
x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
x1=Math.round(x1);
x2=Math.round(x2);

function compareNumbers (x1, x2) {
  return x1 - x2;
}
var mas = new Array(x1,x2) ;
mas.sort(compareNumbers);
return mas;
}
