// reverse a string

// var str = "Hello my name is bhupesh";
// var output = str.split("").reverse().join('');
// console.log(output);


//palindrome 
function palindrome(str){
        const len = str.length;
        for(let i = 0;i<len/2;i++){
            if(str[i]!==str[len-1-i]){
                console.log("it is not palindrome");
                return;
            }
        }
        console.log("It is a palindrome");
}
palindrome("madam");