// Santiago Pedraza Adrian Esteban

var n1=0;
var n2=1;
var fibo=0;

for(var i=0; i<=20;i++) {
fibo= n1+n2;
n1=n2;
n2=fibo;
document.write(fibo);
}
