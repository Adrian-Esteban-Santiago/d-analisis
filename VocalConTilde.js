function vocalConTilde(cadena){

 const vocalTilde= áéíóú;
 let tilde= 0;
 
 for (let i=0; i<cadena.length; i++) {
    if (vocalTilde.include(cadena[i])) {
        tilde++;
        return tilde;
    } else {
        return 0;
    }
    
 } 
}

