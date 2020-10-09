
function largestNumber(arr){
    let largeNum = arr[0];
    for(i=1;i<arr.length ; i++){
        if(arr[i] > largeNum){
            largeNum =arr[i]
        }
    } return largeNum;
}
console.log(largestNumber([40, 2, 13, 34, 42])) // returns 42

console.log(largestNumber([1, 2, 3, 4, 5, 6])) // returns 6

console.log(largestNumber([99, 77, 55, 33, 22, 11])) // returns 99

/*Write a function called `largestNumber` that returns the largest number from an array of numbers.



Example:


largestNumber([40, 2, 13, 34, 42]) // returns 42

largestNumber([1, 2, 3, 4, 5, 6]) // returns 6

largestNumber([99, 77, 55, 33, 22, 11]) // returns 99*/