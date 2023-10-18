function selectionSort(arr){

for (let i = 0; i < arr.length - 1; i++) {
    let minimo= i;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j]< arr[minimo]) {
            minimo= j;
        }
    }
    let aux =arr[i];
    arr[i]= arr[minimo];
    arr[minimo]= aux;
}
return arr;
}
const arr= [5, 8, 3, 1, 6];
console.log(selectionSort(arr));