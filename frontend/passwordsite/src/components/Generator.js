const crypto = require('crypto');

function generatePassword(length) {
    let digits = '0123456789';
    let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let specialChr = '!@$';
    let andChr = '&,/;.';

    let letterLS = upperLetters + lowerLetters + digits + specialChr;
    let combinedLS = upperLetters + lowerLetters + specialChr + andChr;
    let password = '';
    let state = true;

    for (let i = 0; i < length; i++) {
        if (state) {
            let currentLetter = crypto.randomBytes(1)[0] % letterLS.length;
            password += letterLS[currentLetter];
            state = false;
            if (digits.includes(letterLS[currentLetter])) {
                state = true;
            }
        } else {
            let currentLetter = crypto.randomBytes(1)[0] % combinedLS.length;
            password += combinedLS[currentLetter];
            state = true;
        }
    }
    return password;
}

function passwordToSentence(password) {
    let subjectLetters = {'a': 'astronaut', 'b': 'bumblebee', 'c': 'canary', 'd': 'dinosaur', 'e': 'elephant', 'f': 'fish', 'g': 'goat', 
        'h' : 'horse', 'i': 'iguana', 'j': 'joker', 'k': 'koala', 'l': 'lion', 'm': 'mouse', 'n': 'ninja', 'o': 'owl', 
        'p': 'panda', 'q': 'queen', 'r': 'rabbit', 's': 'snake', 't': 'tiger', 'u': 'unicorn', 'v': 'vulture', 
        'w': 'worm', 'x': 'xylophone', 'y': 'yak', 'z': 'zebra' };

    let verbLetters = {'a': 'accepts', 'b': 'blesses', 'c': 'challenges', 'd': 'delights', 'e': 'enjoys', 'f': 'fetches', 'g': 'guards', 
        'h' : 'handles', 'i': 'imagines', 'j': 'jokes', 'k': 'kicks', 'l': 'launches', 'm': 'manages', 'n': 'needs', 'o': 'observes', 
        'p': 'paints', 'q': 'questions', 'r': 'recognizes', 's': 'scratches', 't': 'ticks', 'u': 'uses', 'v': 'visits', 
        'w': 'weighs', 'x': 'x-rays', 'y': 'yells', 'z': 'zips'};

    
    let symbolLetters = {'!': 'i', '$':'s', '@' : 'a'};
    
    let andChr = {'&': 'and', ',' :',', '/': '/', ';' :';', '.':'.'};
  
    let reverseAcroynm = [];
    let state = 0;
    for (let letter of password) {
            
        if (letter in andChr) {
            reverseAcroynm.push(andChr[letter]);
            state = 0;
        } else if (letter in symbolLetters) { 
            let tempLetter = symbolLetters[letter];
            if (state === 0 || state === 2) {
                word = subjectLetters[tempLetter];
            } else {
                word = verbLetters[tempLetter];
            }
            reverseAcroynm.push(word);
            state++;
        } else {
            if (state === 0 || state === 2) {
                word = subjectLetters[letter];
            } else {
                word = verbLetters[letter];
            }
            reverseAcroynm.push(word);
            state++;
        }
    }
    let sentence = reverseAcroynm.reverse().join(" ");
    return sentence;
}

let passwordLength = 10;
let password = generatePassword(passwordLength);
console.log("Secure password : ",password);
console.log("Password as sentence : ",passwordToSentence(password));