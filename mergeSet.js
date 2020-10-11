// Write a function, mergeSet, that merges two arrays and removes all duplicate elements.

function mergeSet(arrA,arrB){
  let combinedArr = [];
  let newArr = [];
  for(let element of arrA){
    combinedArr.push(element);
  }
  for(let element of arrB){
    combinedArr.push(element);
  }
  combinedArr.sort();
  for(let i =0; i<combinedArr.length; i++){
  if(combinedArr[i] === combinedArr[i+1]){
    combinedArr.splice(i+1,1);
  }
  }
return combinedArr;
}
  console.log(mergeSet([1,2,3], [2,3,4,5,6,7]));
  

