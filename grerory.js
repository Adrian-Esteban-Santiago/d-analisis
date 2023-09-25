// Santiago Pedraza Adrian Esteban 

var pi, sumatoria;

function termino(n) {
  var resultado;
  resultado = Math.pow(-1, n) / (2 * n + 1);
  return resultado;
}

sumatoria = 0;

for (var i = 0; i < 1000; i++) {
  sumatoria = sumatoria + termino(i);
  pi = sumatoria * 4;
  console.log(pi);
}