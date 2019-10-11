function changeMe(arr) {
    // you can only write your code here!
    function ageValue(number) {
        if (number == undefined){
            return 'Invalid Birth Year'
        } else {
            return 2019 - number
        }
    }
    for(let i = 0; i < arr.length; i++){
        
        var object = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : ageValue(arr[i][3])
        }

        console.log((i + 1) + ". " + arr[i][0] + " " + arr[i][1])
        console.log(object)
    }   
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""