function angkaPrima(angka) {
    // you can only write your code here!
    if(angka > 1){
        if(angka % angka == 0 && angka % 1 == 0){
            for(let i = 2; i <= 10; i++){
                if(angka !== i) {
                    if (angka % i == 0) {
                        return false
                    }
                }
            }
            return true
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false