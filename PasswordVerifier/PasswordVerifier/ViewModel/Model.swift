//
//  Model.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import Foundation
import ZxcvbnSwift
import SwiftUI

class Model: ObservableObject {
    
    @Published var textField = ""
    @Published var generatedPass = "Your Future Password"
    @Published var keyPhrase = "Your Future Key Phrase"
    @Published var generatedCrack = "0.0"
    @Published var passwordStrength : Double = 0
    @Published var crackTime = "0.0"
    @Published var isCount = false
    @Published var isUpper = false
    @Published var isSymbol = false
    @Published var isDigit = false

    @MainActor
    func checkStrength() {
        
        var digit = false
        var upper = false
        var sym = false
        
        let checker = DBZxcvbn()
        let strength = checker.passwordStrength(self.textField)
        
        withAnimation(.easeInOut) {
            if self.textField == "" {
                self.passwordStrength = 0
            }
            else {
                
                self.passwordStrength = Double(round(10 * ((Double(strength!.score) + 1) * 0.2)) / 10)
            }
            
            self.crackTime = strength?.crackTime ?? "0"

        }
        
                
        for letter in textField {
            if letter.isNumber {
                digit = true
            }
            else if letter.isLetter && letter >= "A" && letter <= "Z" {
                
                upper = true
                
            }
            else if letter.isSymbol || letter.isPunctuation || letter.isCurrencySymbol || letter.isMathSymbol {
                sym = true
            }
        }
        
        withAnimation(.easeInOut){
            if digit {
                self.isDigit = true
            }
            else {
                self.isDigit = false
            }
            
            if upper {
                self.isUpper = true
            }
            else {
                self.isUpper = false
            }
            
            if sym {
                self.isSymbol = true
            }
            else {
                self.isSymbol = false
            }
            
            if self.textField.count >= 12 {
                self.isCount = true
            }
            else {
                self.isCount = false
            }
        }
    }
    
    func getPassword(length: Int) {
        
        let password = generatePassword(length: length)
        
        let checker = DBZxcvbn()
        let strength = checker.passwordStrength(password)
        
        withAnimation(.easeInOut) {
            self.generatedCrack = strength?.crackTime ?? "0"
            self.generatedPass = password
            self.keyPhrase = passwordToSentence(password: password)
        }
    }
    
    func testPassword() {
        
        withAnimation(.easeInOut) {
            self.textField = self.generatedPass

        }
    }
    
    func testPhrase() {
        
        withAnimation(.easeInOut) {
            self.textField = self.keyPhrase

        }
    }
    func generateAcronym() {
        
        withAnimation(.easeInOut) {
            self.generatedPass = createAcronym(from: self.keyPhrase)
        }
    }
    
    func generatePasswordAcro() {
        withAnimation(.easeInOut) {
            self.keyPhrase = passwordToSentence(password: self.generatedPass)
        }
    }
    /*
    func estimateCrackTime(password: String, hashFunction: String, crackingSpeed: Double) -> Double {
        let possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        let passwordLength = Double(password.count)
        let possibleCombinations = pow(Double(possibleChars.count), passwordLength)
        let hashSecurity = getHashSecurity(hashFunction)
        let timeNeeded = possibleCombinations / (crackingSpeed * hashSecurity)
        return timeNeeded
    }

    func getHashSecurity(_ hashFunction: String) -> Double {
        // Return a value representing the relative security of the hash function,
        // based on the specific hash function used
        switch hashFunction {
            case "MD5": return 0.01
            case "SHA-1": return 0.1
            case "SHA-256": return 1.0
            case "SHA-512": return 10.0
            default: return 1.0
        }
    }
    */

}
