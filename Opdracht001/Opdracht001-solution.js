function maps(array){
    return array.map(number => {
      return number + number
    })
}

function mapsShorthand(x) {
    return x.map(n => n+n)
}

function doubleArrayValues(array){
    let newArray = []
array.forEach(number => {
        newArray.push(number * 2)
    })
return newArray
}
console.log(doubleArrayValues([1, 2, 3]))
console.log(maps([1, 2, 3]))
// [2, 4, 6])
console.log(maps([4, 1, 1, 1, 4]))
//[8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]))
// [4, 4, 4, 4, 4, 4]


    