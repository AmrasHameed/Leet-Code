/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed=new Set(allowed)
    let count=0;
    for(let word of words){
        let state=true;
        for(let char of word){
            if(!allowed.has(char)){
"ab"
