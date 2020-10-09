const myArray = [[2,3,4],["Hello CodeCore",1, true]];
function printMulti(myArray){
    for(let element of myArray){
       for(let innerElement of element){
           console.log(innerElement);
       }
    }
}
printMulti(myArray);


/*Write a function called `printMulti` that takes an array of arrays, such as:



const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];



and logs every element to the console as follows:



> printMulti(myArray)

2

3

4

Hello CodeCore

1

true*/