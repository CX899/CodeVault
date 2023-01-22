import React, { useState } from 'react'
import 'toolcool-range-slider';



function generatePassword(length) {
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let specialChr = ["!", "@", "$"];
    let andChr = ["&", ",", "/", ";", "."];
    
    let letterLS = upperLetters.concat(lowerLetters, digits, specialChr);
    let combinedLS = upperLetters.concat(lowerLetters, specialChr, andChr);
    var password = "";
    var state = true;
    
    for (let i = 0; i < length; i++) {
        if (state) {
            let currentLetter = letterLS[Math.floor(Math.random() * letterLS.length)];
            password += currentLetter;
            state = false;
            if (digits.includes(currentLetter)) {
                state = true;
            }
        } else {
            password += combinedLS[Math.floor(Math.random() * combinedLS.length)];
            state = true;
        }
    }
    
    return password;
}

function upperConv(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function passwordToSentence(password) {
    let subjectLetters = {
        "a": "astronaut",
        "b": "bumblebee",
        "c": "canary",
        "d": "dinosaur",
        "e": "elephant",
        "f": "fish",
        "g": "goat",
        "h" : "horse",
        "i": "iguana",
        "j": "joker",
        "k": "koala",
        "l": "lion",
        "m": "mouse",
        "n": "ninja",
        "o": "owl",
        "p": "panda",
        "q": "queen",
        "r": "rabbit",
        "s": "snake",
        "t": "tiger",
        "u": "unicorn",
        "v": "vulture",
        "w": "worm",
        "x": "xylophone",
        "y": "yak",
        "z": "zebra"
    };
    
    let verbLetters = {
        "a": "accepts",
        "b": "blesses",
        "c": "chases",
        "d": "delights",
        "e": "enjoys",
        "f": "fetches",
        "g": "guards",
        "h" : "handles",
        "i": "imagines",
        "j": "jokes",
        "k": "kicks",
        "l": "launches",
        "m": "manages",
        "n": "needs",
        "o": "observes",
        "p": "paints",
        "q": "questions",
        "r": "recognizes",
        "s": "scratches",
        "t": "ticks",
        "u": "uses",
        "v": "visits",
        "w": "weighs",
        "x": "x-rays",
        "y": "yells",
        "z": "zips"
        };

let symbolLetters = {
    "!": "i",
    "$":"s",
    "@" : "a"
};
let andChr = {
    "&": "and",
    "," :", ",
    "/": "/",
    ";": ";",
    ".": "."
};

var reverseAcronym = [];
var state = 0;

for (let letter of password) {
    
    if (Object.keys(andChr).includes(letter)) {
        reverseAcronym.push(andChr[letter]);
    } else if (symbolLetters.hasOwnProperty(letter)) {
        reverseAcronym.push(symbolLetters[letter]);
    } else if (state === 0) {
        reverseAcronym.push(subjectLetters[letter]);
        state = 1;
    } else if (state === 1) {
        reverseAcronym.push(verbLetters[letter]);
        state = 2;
    } else if (state === 2) {
        reverseAcronym.push(verbLetters[letter]);
        state = 3;
    } else if (state === 3) {
        reverseAcronym.push(subjectLetters[letter]);
        state = 0;
    }
}
return upperConv(reverseAcronym.join(" "));

}

const PasswordGenerator = () => {
    const [genpass, setgenpass] = useState('')
    const [phrase, setPhrase] = useState('')
    const [passwordLength, setPasswordLength] = useState(12)

    const setNewPassword = (event) => {
        let password = generatePassword(10);
        let sentence = passwordToSentence(password);
        setgenpass(password);
        setPhrase(sentence);
    }
  return (
    <div>
        <p className='genCreatedPassword'>Password: {genpass}</p>
        <div className='keyContainer'><p className='kPhrase'>Key Phrase: </p><p className='pPhrase'>{phrase}</p></div>
        <div className="scoreContainer"><h3 className="pStrenght">Length of password</h3><h3 className="sScore">{passwordLength}</h3></div>
        <toolcool-range-slider min="12" max="18"></toolcool-range-slider>
        <button className="save-button" onClick={(event)=>setNewPassword(event)}></button>
    </div>
  )
}

export default PasswordGenerator