function highestScore(students) {
    // Code disini
    if(students.length == 0 ){
        return {}
    } else {
        var result = {}
        for(var i = 0; i < students.length; i++) {
            // console.log(students[i])
            result[students[i].class] = {
                name: '',
                score: 0
            }       
        }

        for( var j = 0; j < students.length; j++){
            for(var k = j; k < students.length; k++){
                if(students[j]['class'] == students[k]['class']) {
                    if( students[j]['score'] > result[students[k]['class']]['score']){
                        result[students[k]['class']]['name'] = students[j]['name']
                        result[students[k]['class']]['score'] = students[j]['score']
                    }
                }
            }
        }
    }
    
    // console.log()
    return result

}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }



console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}