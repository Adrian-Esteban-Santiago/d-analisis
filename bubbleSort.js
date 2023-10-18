function bubbleSort(arr){
  for (let i = 0; i < arr.length -1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j+1]<arr[j]) { 
       let temp = arr[j];
       arr[j] = arr[j+1];
       arr[j+1] = temp;
       
        }
    }
  }
return arr;

}
const arr =[5, 3, 4, 8,2,];
console.log(bubbleSort(arr))