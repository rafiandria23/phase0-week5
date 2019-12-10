/**
 * HACKTIV8 Phase 0 - Logic Challenge - Most Frequent Largest Numbers
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function sorting(arrNumber) {
    // code di sini
    let len = arrNumber.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arrNumber[j-1] > arrNumber[j]) {
                let temp = arrNumber[j - 1];
                arrNumber[j - 1] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini

    if (arrNumber.length === 0) {
        return '';
    }

    let highestNumber = arrNumber[arrNumber.length - 1];
    let total = 0;
    for (let a = 0; a < arrNumber.length; a++) {
        if (arrNumber[a] === highestNumber) {
            total += 1;
        }
    }

    return `angka yang paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${total} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''