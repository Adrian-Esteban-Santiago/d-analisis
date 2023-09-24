// Santiago Pedraza Adrian Esteban

var n=1;

function fibo(n){

   if (n<3) {
    return 1;
   } 
   else{
   return fibo(n-1)+fibo(n-2);
       }
}
