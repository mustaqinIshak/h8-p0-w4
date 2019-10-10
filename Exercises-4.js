function cariModus(arr) {

    var uniqNumber = []
    var nilai = []
    var index = 0

    for(let i = 0; i < arr.length; i++) {
        if(uniqNumber.indexOf(arr[i]) == -1){
            uniqNumber.push(arr[i])
        }
    }
    uniqNumber.sort()
    
    for(let j = 0; j < uniqNumber.length; j++){
      var tampung = 0
      for(let k = 0; k < arr.length; k++){
        if(arr[k] === uniqNumber[j]){
          tampung += 1
        }
      }
      nilai.push(tampung)
    }
    var status = false
    for(let y = 0; y < nilai.length; y++){
      if(index === 0){
        index = nilai[0]
      }
      if(index === nilai[y]){
        status = true
      } else if(index !== nilai[y]) {
        status = false
        break
      }
    }
    
    if(nilai.length === 1 || status ===true){
      return -1
    } else {
     
      for(let x = 0; x < nilai.length; x++){
        if(index < nilai[x]){
          index = x
        }
      }
      return uniqNumber[index]
    }

  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1