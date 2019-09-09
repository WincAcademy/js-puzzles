function maps(array){
    return array.map(number => {
    return number + number
    })
}

function mapsShorthand(x) {
    return x.map(n => n+n)
}

maps([1, 2, 3]) 
// [2, 4, 6])
maps[4, 1, 1, 1, 4]
//[8, 2, 2, 2, 8]); 
maps([2, 2, 2, 2, 2, 2])
// [4, 4, 4, 4, 4, 4]
    