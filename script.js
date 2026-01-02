/* Function 1 */
function capitalizeWords(text){
    return text
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

/* Function 2 */
function mergeSortedArray(arr1, arr2) {
    let arr3 = [];
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
        while (j < arr2.length && arr2[j] < arr1[i]) {
            arr3.push(arr2[j]);
            j++;
        }
        arr3.push(arr1[i]);
    }
    while (j < arr2.length) arr3.push(arr2[j++]);
    return arr3;
}

/* Function 3 */
function sumOfSquares(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++) sum += arr[i]*arr[i];
    return sum;
}

/* Function 4 */
function filterArray(arr, callback){
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])) res.push(arr[i]);
    }
    return res;
}

/* Function 5 */
function mapArray(arr, callback){
    let res = [];
    for(let i=0;i<arr.length;i++) res.push(callback(arr[i]));
    return res;
}

/* Function 6 */
function reduceArray(arr, callback, initial){
    let acc = initial;
    for(let i=0;i<arr.length;i++) acc = callback(acc, arr[i]);
    return acc;
}

/* Function 7 */
function forEachArray(arr, callback){
    for(let i=0;i<arr.length;i++) callback(arr[i]);
}

/* Function 8 */
function findMax(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++) if(arr[i]>max) max = arr[i];
    return max;
}

/* Function 9 */
function mergeObjects(obj1, obj2){
    let newObj = {};
    for(let key in obj1) newObj[key] = obj1[key];
    for(let key in obj2) newObj[key] = obj2[key];
    return newObj;
}

/* Function 10 */
function invertObject(obj){
    let newObj = {};
    for(let key in obj) newObj[obj[key]] = key;
    return newObj;
}

/* --- Test Functions for HTML --- */

function testCapitalize(){
    let text = document.getElementById("capitalizeInput").value;
    document.getElementById("capitalizeResult").innerText = capitalizeWords(text);
}

function testMerge(){
    let arr1 = document.getElementById("mergeArr1").value.split(",").map(Number);
    let arr2 = document.getElementById("mergeArr2").value.split(",").map(Number);
    document.getElementById("mergeResult").innerText = mergeSortedArray(arr1,arr2).join(", ");
}

function testSquare(){
    let arr = document.getElementById("squareInput").value.split(",").map(Number);
    document.getElementById("squareResult").innerText = sumOfSquares(arr);
}

function testFilter(){
    let arr = document.getElementById("filterInput").value.split(",").map(Number);
    document.getElementById("filterResult").innerText = filterArray(arr, num => num > 2).join(", ");
}

function testMap(){
    let arr = document.getElementById("mapInput").value.split(",").map(Number);
    document.getElementById("mapResult").innerText = mapArray(arr, num => num*2).join(", ");
}

function testReduce(){
    let arr = document.getElementById("reduceInput").value.split(",").map(Number);
    document.getElementById("reduceResult").innerText = reduceArray(arr, (acc,curr)=>acc+curr, 0);
}

function testForEach(){
    let arr = document.getElementById("forEachInput").value.split(",").map(Number);
    console.log("forEach Output:");
    forEachArray(arr, num => console.log(num*2));
    alert("Check console for output!");
}

function testMax(){
    let arr = document.getElementById("maxInput").value.split(",").map(Number);
    document.getElementById("maxResult").innerText = findMax(arr);
}

function testMergeObj(){
    let obj1 = parseObjInput(document.getElementById("obj1Input").value);
    let obj2 = parseObjInput(document.getElementById("obj2Input").value);
    document.getElementById("mergeObjResult").innerText = JSON.stringify(mergeObjects(obj1,obj2));
}

function testInvertObj(){
    let obj = parseObjInput(document.getElementById("invertInput").value);
    document.getElementById("invertResult").innerText = JSON.stringify(invertObject(obj));
}

/* Helper to convert input like "a:1,b:2" into {a:1,b:2} */
function parseObjInput(str){
    let obj = {};
    if(str.trim() === "") return obj;
    let parts = str.split(",");
    parts.forEach(p=>{
        let [key,value] = p.split(":");
        obj[key.trim()] = isNaN(value) ? value.trim() : Number(value);
    });
    return obj;
}