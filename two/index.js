
const input = document.getElementById("input");



function checkPalindrome(inputString) {
    
    const inputString = input;
    let isPalindrome = false;
    let inputStringLength = inputString.length;

    for (let i = 0; i <= inputString.length; i++) {
        if (inputString[i] === inputString[inputString.length-i]) {
            isPalindrome = true;    
        } else  {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}