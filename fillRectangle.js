function fillRectangle(width, height, character) {
    // if the character parameter is not a string or number exit the function
    if ((typeof character !== 'string') && (!typeof character === 'number')) {
      console.log(`expecting character to be type of string or number, instead got ${typeof character}`);
      return;
    }
    // creates an array of characters equal to the amount of the width
    let row = [];
    for (let i = 0; i < width; i++) {
      row.push(character);
    }
  
    // for the amount of height push the created "row" array into another array
    let rectangle = [];
    for (let i = 0; i < height; i++) {
      rectangle.push(row);
    }
  
    return rectangle;
  }
  
  
  const rect = fillRectangle(3,5, '🔥 ');
  console.log(rect);
  
  function rectangleToString(arr) {
    // if the arr parameter is not an array exit the function
    if(!Array.isArray(arr)) {
      console.log(`expected arr to be an array, instead got ${typeof Array}`);
      return;
    }
  
    // loop through and add each character from the nested array into a string
    let string = '';
    for (const element of arr) {
      for (const character of element) {
        string += character;
      }
      string += '\n';
    }
  
    return string;
  }
  
  const rect_to_string = rectangleToString(fillRectangle(3,5, 1))
  console.log(rect_to_string)










/*Write a function, fillRectangle, that takes 3 arguments: a number representing a width, 
another number representing a height and a single character string as chr. 
It must return a 2 dimensional array (i.e. an array containing array values of the same length.) 
of length width whose inner arrays are length height where the values of the inner arrays are filled with chr.



Example:



fillRectangle(2, 2, "*")

// [

//   ['*', '*'],

//   ['*', '*'],

// ]



fillRectangle(5, 3, "🔥")

// [

//   ['🔥', '🔥', '🔥', '🔥', '🔥'],

//   ['🔥', '🔥', '🔥', '🔥', '🔥'],

//   ['🔥', '🔥', '🔥', '🔥', '🔥'],

// ]



Write another function, rectangleToString, that takes a 2 dimensional array created by the function above and converts it to a string as follows where the content of the inner arrays is joined by new line characters \n:



const str = rectangleToString(fillRectangle(5, 3, "🔥"))

// '🔥🔥🔥🔥🔥\n🔥🔥🔥🔥🔥\n🔥🔥🔥🔥🔥'



// If it were logged, it would look like this:

console.log(str)



// 🔥🔥🔥🔥🔥

// 🔥🔥🔥🔥🔥

// 🔥🔥🔥🔥🔥*/