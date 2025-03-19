
//calbacks

function addTwo(inputValue){
    return inputValue + 2;
}

function addS(inputValue){
    return inputValue + "s";
}

function map(arr, callback){
    let newArr = [];
    for (let i of arr) newArr.push(callback(i));
    return newArr;
}

function forEach(arr, callback){
    for (let i = 0; i<arr.length; i++)
        arr[i] = callback(arr[i]);
}

function mapWith(arr, callback){
    let newArr = [...arr];
    forEach(arr, (i) => newArr.push(callback(i)));
    return newArr;
}

function reduce(arr, callback, initialValue){
    let newArr = [...arr];
    let acc = initialValue || newArr.shift();
    for (let i of newArr) acc = callback(acc, i);
    return acc;
}


function intersection(matrix){
    for(let i = 0; i<matrix.length-1; i++){
        let a = matrix[i];
        let b = matrix[i+1];
        matrix[i] = matrix[i].filter(element => matrix[i+1].includes(element))
        matrix[i+1] = matrix[i+1].filter(element => matrix[i].includes(element));
    }
    return matrix.splice(-1)[0];
}

// closures
function createFunction(){
    return () => console.log("hello");
}


