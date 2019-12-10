/**
 * HACKTIV8 Phase 0 - Logic Challenge - Hapus Simbol (Regex)
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/


/* Problem

Diberikan sebuah
function cariPelaku(kalimat) yang menerima satu parameter berupa string.Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut - turut di dalam kalimat tersebut. Gunakan regex untuk melatih kemampuan regex. 
*/





function cariPelaku(str) {
    // you can only write your code here!
    let regexResult = str.match(/abc/g);
    return regexResult.length;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2