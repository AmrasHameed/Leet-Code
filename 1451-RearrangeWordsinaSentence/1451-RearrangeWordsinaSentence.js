/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    let sentence = text.toLowerCase().split(" ");
    sentence = sentence.sort((a, b) => a.length - b.length);
    sentence = sentence.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};
"Leetcode is cool"
"Keep calm and code on"
"To be or not to be"
"Is cool leetcode"
"On and keep calm code"
"To be or to be not"
"Is cool leetcode"
"On and keep calm code"
"To be or to be not"
"
