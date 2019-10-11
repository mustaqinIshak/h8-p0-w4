function ubahHuruf(kata) {
    // you can only write your code here!
   
    var huruf = "abcdefghijklmnopqrstuvwxyz"
    var result = []
    for (let i = 0; i < kata.length; i++){
        for(let j = 0; j < huruf.length; j++){
            if (kata[i] === huruf[j]){
              if(huruf[j] === 'z'){
                result.push(huruf[0])
              }else{
                result.push(huruf[j + 1])
              }
                 
            } 
        }
         
    }
 
 return result.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
 

