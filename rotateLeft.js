function rotateLeft(array, numberOfRotation) {
    let arrayLength = array.length;
    let p = 1;
    let updatedArr = [];

    while(p <= numberOfRotation) {
        let last = array[0];
        for(let i = 0; i < arrayLength - 1; i++) {
            array[i] = array[i + 1];
        }
        array[arrayLength-1] = last;
        p++;
    }
    
    for(let i = 0; i < arrayLength; i++) {
        updatedArr.push(array[i]);
    }

    return updatedArr;

}

const arr = rotateLeft([1, 2, 3, 4, 5], 4)

console.log(arr);