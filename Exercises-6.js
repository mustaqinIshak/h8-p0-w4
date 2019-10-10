function digitPerkalianMinimum(angka) {
    // you can only write your code here!
 
    var result = []
    var digit = 0

   for(let i = 1; i <= angka; i++){
       if(angka % i == 0){
        var hasil = []
        hasil.push(i)
        hasil.push(angka/i)
        result.push(hasil.join(""))
       }
       
   }

   if(digit == 0){
    digit = result[0].length
   } 

   for(let j = 0; j < result.length; j++){
       if(result[j].length < digit){
           digit = result[j].length
       }
   }
    return digit
}
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2