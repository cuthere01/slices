// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

export function mergeAlternately(word1: string, word2: string): string {
    const [chars1, chars2]: string[][] = [word1.split(""), word2.split("")];
    const res: string[] = [];

    for (let i = 0; i < Math.min(chars1.length, chars2.length); i++) {
        res.push(chars1[i], chars2[i]);
    }

    if (word1.length > word2.length) {
		res.push(word1.slice(word2.length))
    } else if (word1.length < word2.length) {
        res.push(word2.slice(word1.length));
    }

    return res.join("");
}

const word1 = "abc";
const word2 = "uvwxyz";

console.log(mergeAlternately(word1, word2), mergeAlternately(word2, word1));
