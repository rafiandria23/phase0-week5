/**
 * HACKTIV8 Phase 0 - Logic Challenge - Password Generator
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function changeVocals(str) {
    //code di sini
    let vocals = 'aiueo';
    let encode = 'bjvfp';
    let vocalsCaps = vocals.toUpperCase();
    let encodeCaps = encode.toUpperCase();
    let input = str.split('');
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            switch (input[i]) {
                case vocals[j]:
                    input[i] = encode[j];
                    break;
                case vocalsCaps[j]:
                    input[i] = encodeCaps[j];
                    break;
                default:
                    break;
            }
        }
    }
    return input.join('');
}

function reverseWord(str) {
    //code di sini
    let input = str.split('');
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += (input[i]);
    }
    return reversed;
}

function setLowerUpperCase(str) {
    //code di sini
    let result = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case str[i].toLowerCase():
                result += str[i].toUpperCase();
                break;
            case str[i].toUpperCase():
                result += str[i].toLowerCase();
            default:
                break;
        }
    }
    return result;
}

function removeSpaces(str) {
    let removed = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            removed += str[i];
        }
    }
    return removed;
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    let vocalChanged = changeVocals(name);
    let reversedResult = reverseWord(vocalChanged);
    let setLowerUpperResult = setLowerUpperCase(reversedResult);
    let removedSpacesResult = removeSpaces(setLowerUpperResult);
    return removedSpacesResult;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'