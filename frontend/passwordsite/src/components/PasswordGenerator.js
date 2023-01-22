
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}


function generate_password(length) {
  var COMBINED_LS, LETTER_LS, and_chr, current_letter, digits, lower_letters, password, special_chr, state, upper_letters;
  digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  lower_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  upper_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  special_chr = ["!", "@", "$"];
  and_chr = ["&", ",", "/", ";", "."];
  LETTER_LS = upper_letters + lower_letters + digits + special_chr;
  COMBINED_LS = upper_letters + lower_letters + special_chr + and_chr;
  password = "";
  state = true;

  for (var x = 0;  x < length ; x += 1) {
    if (state) {
      current_letter = randomChoice(LETTER_LS);
      password += current_letter;
      state = false;

      if (current_letter in digits) {
        state = true;
      }
    } else {
      password += randomChoice(COMBINED_LS);
      state = true;
    }
  }

  return password;
}

function _upperConv(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function passwordToSentence(password) {
    let subjectLetters = {'a': 'astronaut', 'b': 'bumblebee', 'c': 'canary', 'd': 'dinosaur', 'e': 'elephant', 'f': 'fish', 'g': 'goat', 
        'h' : 'horse', 'i': 'iguana', 'j': 'joker', 'k': 'koala', 'l': 'lion', 'm': 'mouse', 'n': 'ninja', 'o': 'owl', 
        'p': 'panda', 'q': 'queen', 'r': 'rabbit', 's': 'snake', 't': 'tiger', 'u': 'unicorn', 'v': 'vulture', 
        'w': 'worm', 'x': 'xylophone', 'y': 'yak', 'z': 'zebra' }

    let verbLetters = {'a': 'accepts', 'b': 'blesses', 'c': 'challenges', 'd': 'delights', 'e': 'enjoys', 'f': 'fetches', 'g': 'guards', 
        'h' : 'handles', 'i': 'imagines', 'j': 'jokes', 'k': 'kicks', 'l': 'launches', 'm': 'manages', 'n': 'needs', 'o': 'observes', 
        'p': 'paints', 'q': 'questions', 'r': 'recognizes', 's': 'scratches', 't': 'ticks', 'u': 'uses', 'v': 'visits', 
        'w': 'weighs', 'x': 'x-rays', 'y': 'yells', 'z': 'zips'}

    let symbolLetters = {'!': 'i', '$':'s', '@' : 'a'}
    
    let andChr = {'&': 'and', ',' :',', '/': '/', ';' :';', '.':'.'}
  
    let reverseAcronym = [];
    let state = 0;
    for (let letter of password) {
            
        if (letter in andChr) {
            reverseAcronym.push(letter);
            state = 0;
        } else if (letter in symbolLetters) { 
            let tempLetter = symbolLetters[letter];
            let word;
            if (state == 0 || state == 2) {
                word = subjectLetters[tempLetter];
            } else {
                word = verbLetters[tempLetter];
            }
            state++;
            word = letter + word.slice(1);
            reverseAcronym.push(word);
        } else if (letter.match(/\d/)) {
            reverseAcronym.push(letter);
        } else if (state == 0 || state == 2) {
            let word = subjectLetters[letter.toLowerCase()];
            if (letter.match(/[A-Z]/)) {
                word = _upperConv(word);
            }
            reverseAcronym.push(word);
            state++;
        } else if (state == 1){
            let word = verbLetters[letter.toLowerCase()];
            if (letter.match(/[A-Z]/)) {
                word = _upperConv(word);
            }
            reverseAcronym.push(word);
            state++;
        }
        if (state == 3){
            state = 0
        }
    }
    return reverseAcronym.join(' ')
}

const PasswordGenerator = () => {
  return (
    <div className="password__container">
        <button className="password__button" onClick={console.log(passwordToSentence(generate_password(10)))}></button>
    </div>
  )
}

export default PasswordGenerator