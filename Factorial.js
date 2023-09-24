// Santiago Pedraza Adrian Esteban 

var n=0; 

function fact(n){
   if (n<=1) {
    return 1;
   }
   else{
    return n*fact(n-1);
   }
}
