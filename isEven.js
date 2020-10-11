function isEven(num){
    if((num & 1) === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(17));
console.log(isEven(26));