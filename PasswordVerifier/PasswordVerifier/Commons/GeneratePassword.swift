//
//  GeneratePassword.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-22.
//

import Foundation

func generatePassword(length: Int) -> String {
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let specialChr = ["!", "@", "$"]
    let andChr = ["&", ",", "/", ";", "."]
    
    let letterLS = upperLetters + lowerLetters + digits + specialChr
    let combinedLS = upperLetters + lowerLetters + specialChr + andChr
    var password = ""
    var state = true
    
    for _ in 0..<length {
        if state {
            let currentLetter = letterLS[Int(arc4random_uniform(UInt32(letterLS.count)))]
            password += currentLetter
            state = false
            if digits.contains(currentLetter) {
                state = true
            }
        } else {
            password += combinedLS[Int(arc4random_uniform(UInt32(combinedLS.count)))]
            state = true
        }
    }
    
    return password
}

func upperConv(word: String) -> String {
    return word[word.startIndex...word.startIndex].uppercased() + word[word.index(after: word.startIndex)...]
}

func passwordToSentence(password: String) -> String {
    let subjectLetters = ["a": "astronaut", "b": "bumblebee", "c": "canary", "d": "dinosaur", "e": "elephant", "f": "fish", "g": "goat",
                          "h" : "horse", "i": "iguana", "j": "joker", "k": "koala", "l": "lion", "m": "mouse", "n": "ninja", "o": "owl",
                          "p": "panda", "q": "queen", "r": "rabbit", "s": "snake", "t": "tiger", "u": "unicorn", "v": "vulture",
                          "w": "worm", "x": "xylophone", "y": "yak", "z": "zebra"]
    
    let verbLetters = ["a": "accepts", "b": "blesses", "c": "challenges", "d": "delights", "e": "enjoys", "f": "fetches", "g": "guards",
                       "h" : "handles", "i": "imagines", "j": "jokes", "k": "kicks", "l": "launches", "m": "manages", "n": "needs", "o": "observes",
                       "p": "paints", "q": "questions", "r": "recognizes", "s": "scratches", "t": "ticks", "u": "uses", "v": "visits",
                       "w": "weighs", "x": "x-rays", "y": "yells", "z": "zips"]
    
    let symbolLetters = ["!": "i", "$":"s", "@" : "a"]
    let andChr = ["&": "and", "," :", ", "/": "/", ";": ";", ".": "."]
    
    var reverseAcronym = [String]()
    var state = 0
    
    for letter in password {
        
        if andChr.keys.contains(String(letter)) {
            reverseAcronym.append(andChr[String(letter)]!)
            state = 0
        } else if symbolLetters.keys.contains(String(letter)) {
            let tempLetter = symbolLetters[String(letter)]
            var word: String
            if state == 0 || state == 2 {
                word = subjectLetters[tempLetter!]!
            } else {
                word = verbLetters[tempLetter!]!
            }
            state += 1
            word = String(letter) + word[word.index(after: word.startIndex)...]
            reverseAcronym.append(word)
        } else if letter.isNumber {
            reverseAcronym.append(String(letter))
        } else if state == 0 || state == 2 {
            var word = subjectLetters[letter.lowercased()] ?? ""
            if letter.isUppercase {
                word = upperConv(word: word)
            }
            reverseAcronym.append(word)
            state += 1
        } else if state == 1 {
            var word = verbLetters[letter.lowercased()] ?? ""
            if letter.isUppercase {
                word = upperConv(word: word)
            }
            reverseAcronym.append(word)
            state += 1
        }
        if state == 3 {
            state = 0
        }
    }
    
    return reverseAcronym.joined(separator: " ")
    
}

func createAcronym(from keyPhrase: String) -> String {
    let words = keyPhrase.split(separator: " ")
    var acronym = ""
    for word in words {
        acronym += String(word.first ?? Character(""))
    }
    return acronym
}
