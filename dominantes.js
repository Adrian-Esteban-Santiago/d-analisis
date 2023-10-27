function dominante(arr) {
    const x = arr.length;
    if (x == 0) {
      return [];
    }
  
    const dominantes = [arr[x - 1]];
    let indiceDom = 0;
    let uelemento = arr[x - 1];
  
    for (let i = x - 2; i >= 0; i--) {
      if (arr[i] > uelemento) {
        uelemento = arr[i];
        dominantes[++indiceDom] = uelemento;
      }
    }
  
    return dominantes;
  }
  
  