// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
 if(number1 > number2) {
    return number1
  } else if(number2 > number1) {
    return number2
  } else {
    return number1
  }
}



// Iteration #2: Find longest word
  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
    if (!words.length) return null;
    if (words.length === 1) return words[0];
    let maxcadena = words[0]
    for (let i = 0; i < words.length; i++){
      if (words[i].length > maxcadena.length) {
        maxcadena = words[i]
        //console.log(maxcadena, words[i])
            
      }
    } return maxcadena
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (!numbers.length) return 0;
  if (numbers.length === 1) return numbers[0]
  //console.log(!numbers.length, numbers)
   
  let sum = 0
  for (i = 0; i < numbers.length; i++) {
    if(numbers[i] === 0) {
      return 0
    }else{
      sum += numbers[i];
    }
   
  }
  //console.log(sum)
  return sum
}




// Iteration #3.1 Bonus:
function sum(parametros) {
  //console.log(parametros)
  if(parametros.length === 0) return 0
  if (parametros.length === 1) return parametros[0]
  let result = 0
  let resultString = 0
  for (i = 0; i < parametros.length; i++) {
   
    if(parametros[i] === 0) {
      return 0
    } else if(typeof parametros[i] === 'object') {
      console.error('this is object')
      //console.log( typeof parametros[i], 'object')
    }
    else if(typeof parametros[i] === 'array') {
      console.error('this is array')
    } 
    
    else if(typeof parametros[i] === "string" ){
      //console.log(parametros[i].length, 'ultimo ejercicio')
      result += parametros[i].length
      //console.log( result, 'validacion')
      
    } else {
      result += parametros[i]
    }
   
    
  }
  return result
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if(numbersAvg.length === 0) return null

  let average = 0
  for (i = 0; i < numbersAvg.length; i++) {
    
      average += numbersAvg[i];
    
   
  }
  return average / numbersAvg.length
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if(wordsArr.length === 0) return null

  let promedio = 0
  for(i = 0; i < wordsArr.length; i++) {
    promedio += wordsArr[i].length;
    //console.log(promedio, 'promedio')
  }
  //console.log(promedio / wordsArr.length)
  return promedio / wordsArr.length
  
 }

// Bonus - Iteration #4.1
function avg(arreglo) {
  // console.log(arreglo, 'estoy aqui')
  if(arreglo.length === 0){
    return null
  }
  let sumaString = 0
  let sumaNumber = 0
  let sumaBoolean = 0 
  let promedio = 0
  for(i =0; i < arreglo.length; i++) {
    
    if(typeof arreglo[i] === 'string' ){
      sumaString += arreglo[i].length
      // console.log(arreglo[i].length, 'string')
    } else if (typeof arreglo[i] === 'boolean' ){
      if (arreglo[i] === true ){
        sumaBoolean += 1
      }else{
        sumaBoolean += 0
      }

     // console.log(arreglo[i], 'boolean')
    }else {
      // console.log(arreglo[i], 'numero')
      sumaNumber += arreglo[i]
    }
  }
  
  promedio =  sumaString + sumaNumber + sumaBoolean
  return promedio / arreglo.length
  // console.log( promedio)
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(prop) {
  // console.log(prop)
  if(prop.length === 0){
    return null
  }
  // let uniqified = prop[1]
  // let uni = prop[0]
  // for(i = 0; i < prop.length; i++){
  //   if(uniqified === prop[i]){
  //     console.log('igual', prop[i], typeof prop[i])
  //     return [uniqified]
      
  //   } else if(uni !== prop[i]) {
  //     console.log('diferente', prop[i], typeof prop[i])
  //     return [prop]

  //   }
      
  // }
 
  // for(let i =0; i < prop.length; i++) {
  //   for(let k = i +1; k < prop.length; k++){
  //     if(prop[i].includes(prop[k])){
  //       console.log('diferent',prop[i], prop[k] )
  //       return prop
       
  //     } else if(prop[i]=== prop[k]) {
  //       console.log('igual', [prop[0]], prop[i])
  //       return [prop[0]]
  //     }
  //   }
  // }

  // let index = prop.indexOf(prop[0 ])
  // console.log(index)
  
  const newArray = []
  prop.forEach((item)=>{
    if(!newArray.includes(item)){
      // console.log(newArray)
      newArray.push(item);
    }
  })
  // console.log(newArray)
  return newArray

}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, item) {
  //console.log(wordsFind, item)
  if(wordsFind.length === 0){
    return null
  }

  // let word = '';
  // wordsFind.forEach((i)=>{
  //   // console.log(i, 'prueba', item)
  //   //  let exist = wordsFind.find(item === i)
  //   //  console.log(exist, 'exit' )
  //   if(i === item){
  //     word = true
  //     // console.log('iguallllll', true)
  //     // return true
  //   } else {
  //     word = false
  //     // console.log('es falso')
  //     // return false
  //   }
    
  // })
  // console.log(word) 

  let noExist = wordsFind.indexOf(item)
  //console.log(noExist)
  if(noExist === -1 ){
    return false
  } else {
    return true
  }

  // let find = wordsFind.find(item => item === wordsFind[i])

  //   console.log(item)
  //   if(find){
  //     return true
    
  //   } else {
  //     return false
  //   }

  
  
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsCount, element) {
  console.log(wordsCount, element)
  if(wordsCount.length === 0){
    return 0
  }

let repetidos = 0;

wordsCount.forEach(e=>{
  // console.log(e, 'string numero')
  //repetidos[numero] = (repetidos[numero] || 0) + 1;
  if( e === element){
   repetidos = repetidos +  1  
  } 
})
return repetidos


 
}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
