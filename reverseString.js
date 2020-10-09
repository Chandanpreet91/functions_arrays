let reverseStr = '';

function reverse(str){
                                     //hello
for(i=str.length-1;i>=0;i--){
 reverseStr += str[i];
 }
 return reverseStr;
}
reverse("word" + "\n");
reverse("nor"+ "\n") ;
reverse("codecore" + "\n");
console.log(reverseStr);






/*//Write a function, reverse that takes a string and returns another string with the characters in reverse order.



Example:


reverse("hello") // "olleh"
 // "erocedoc"*/