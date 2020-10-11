function matchingSet(arr1, arr2) {
    let matching = [];
    for (let a of arr1) {
      for (let b of arr2) {
        if (a === b) {
          matching.push(a);
        }
      }
    }matching.sort();
    for(let i = 0; i< matching.length;i++){
        if (matching[i] === matching[i+1]){
            matching.splice(i+1,1);
        }
    }
    return matching;
}



console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])); // [3, 4]

console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])); // ['j', 'n']

/*Create a function, matchingSet, that takes two arrays as arguments. 
It should return an array of all the elements that are shared between the two arrays (without duplicates). 
Effectively, it should return the intersection of both arrays.

*/