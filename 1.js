const array = [5, 1, 4, 6, 7, 3, 5, 7, 3];

function findDuplicates(array) {
    const duplicates = {};
    const result = [];

    array.forEach(element => {
        duplicates[element] !== undefined ? duplicates[element]++ : duplicates[element] = 1;
    });

    for(let i in duplicates) {
        if(duplicates[i] > 1) result.push(i);
    }

    return result;
}

console.log("Duplicate Elements: ", findDuplicates(array));