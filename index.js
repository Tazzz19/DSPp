// Problem 1
function sumOfDistinctElements(set1, set2) {
    const distinctElements = [...new Set([...set1, ...set2])];
    const sum = distinctElements.reduce((acc, val) => acc + val, 0);
    return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result);


// Problem 2
function dotProduct(v1, v2) {
    return v1.reduce((acc, val, index) => acc + val * v2[index], 0);
}

function areVectorsOrthogonal(v1, v2) {
    const result = dotProduct(v1, v2);
    return result === 0;
}

const vectors = [
    [1, 2, 3],
    [4, -2, 1],
    [2, 3, 4],
    [1, -1, -1],
];

for (let i = 0; i < vectors.length; i += 2) {
    const v1 = vectors[i];
    const v2 = vectors[i + 1];
    const result = areVectorsOrthogonal(v1, v2);
    console.log(`Are vectors [${v1}] and [${v2}] orthogonal?`, result);
}
