function zip(arrA,arrB){
    let lengthA = arrA.length;
    let lengthB = arrB.length;
    let TwoDArr =[];
    let newArr = [];
    if(lengthA !== lengthB){
        return ;
    }else{
       
        for(let i=0;i<arrA.length;i++){
             
          TwoDArr.push([arrA[i],arrB[i]]);
                
             
        }
        }return TwoDArr;
    }

console.log(zip([1, 2, 3], [4, 5, 6])); // [[1, 4], [2, 5], [3, 6]]
console.log(zip([0, 0, 0], []));