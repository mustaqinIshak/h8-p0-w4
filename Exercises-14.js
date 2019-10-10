function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = []
    
    for (let i = 0; i < arrPenumpang.length; i++){
        var mulai = rute.indexOf(arrPenumpang[i][1]) 
        var bayar = 0;
        var object = {}
        for(let j = mulai; j < rute.length; j++){
          if(rute[j] == arrPenumpang[i][2]) {
            break
          } else {
            bayar += 2000
          }
            
        }
      object['penumpang'] = arrPenumpang[i][0]
      object['naikDari'] = arrPenumpang[i][1]
      object['tuhuan'] = arrPenumpang[i][2]
      object['bayar'] = bayar
      result.push(object)
    }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]