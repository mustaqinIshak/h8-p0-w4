function cariModus(arr) {
    // you can only write your code here!
    // arr.sort(function(a, b) {
    //     return a - b
    // })
    // var banding = []
    // var result = []

    // for(let f = 0; f < arr.length; f++){
    //     banding.push(arr[f])
    // }
   
    // for(let i = 0; i < banding.length; i++){
    //     for(let j = banding.length - 1; j > i; j--){
    //         if(banding[i] == banding[j]){
    //             banding.splice(j, 1)  
    //         }
    //     }

    // }

    // for(let k = 0; k < banding.length; k++){
    //     var hitung = 0
    //     for(let l = 0; l < arr.length; l++){
    //         if(banding[k] == arr[l]){
    //             hitung += 1
    //         }
    //     }
    //     result.push(hitung)
    // }
    
    // for(let m = 0; m < result.length; m++){
    //     if(result[m] > nilai) {
    //         nilai = result[m]
    //     }
    // }
    // console.log(banding)
    // // console.log(result)
    var uniqNumber = []

    for(let i = 0; i < arr.length; i++) {
        if(uniqNumber.indexOf(arr[i]) == -1){
            uniqNumber.push(arr[i])
        }
    }
    
    return uniqNumber

  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1