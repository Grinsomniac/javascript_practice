

function validateInput() {
    const input = document.getElementById("input");
    if (input != null) {
        checkPalindrome();
    } else {
        alert ("Enter a word or phrase!");
    }
}

function checkPalindrome() {
    const ogString = input.value;
    const reverseString = ogString.split("").reverse().join("");

    if (reverseString === ogString) {
        alert("It\'s a Palindrome")
        return true;
    } else {
        alert("It\'s not a Palindrome")
        return false;
    }
}