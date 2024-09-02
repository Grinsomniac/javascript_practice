const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
    "It is never too late to be what you might have been. — George Eliot",
    "You must be the change you wish to see in the world. — Mahatma Gandhi",
    "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "I am not a product of my circumstances. I am a product of my decisions. — Stephen Covey"
];

//const usedIndexes = new set();
const quoteP = document.getElementById("quote");
const authorP = document.getElementById("author");


function generate() {
    let rand = Math.floor(Math.random() * quotes.length);
    let parts = quotes[rand].split(" — ");
    quoteP.innerHTML = parts[0];
    authorP.innerHTML = " — " + parts[1];
}