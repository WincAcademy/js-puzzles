function first(array) {
    return array.slice(0)
}

function first(array) {
    return array[0]
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); //[]
console.log(first([7, 9, 0, -2],3)); //[7, 9, 0]
console.log(first([7, 9, 0, -2],6)); //[7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); //[]