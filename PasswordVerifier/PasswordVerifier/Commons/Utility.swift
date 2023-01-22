//
//  Utility.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import Foundation
import SwiftUI
import Security



func timeFrame(model: Model) -> String {
    
    var time = ""
    var plural = false
    
    let calendar = Calendar(identifier: .gregorian)
    
    let components = calendar
        .dateComponents([.year, .month, .day, .hour, .minute, .second],
                        from: Date(),
                        to: Date() + (Double(model.crackTime) ?? 0))
    
    if components.year! > 200 {
        return "Centuries"
    }
    else if components.year! > 0 {
        time = String(components.year!) + " year"
        if components.year! > 1 {
            plural = true
        }
    }
    else if components.month! > 0 {
        time = String(components.month!) + " month"
        if components.month! > 1 {
            plural = true
        }
    }
    else if components.day! > 0 {
        time = String(components.second!) + " day"
        if components.day! > 1 {
            plural = true
        }
    }
    else if components.hour! > 0 {
        time = String(components.second!) + " hour"
        if components.hour! > 1 {
            plural = true
        }
    }
    else if components.minute! > 0 {
        time = String(components.minute!) + " minute"
        if components.minute! > 1 {
            plural = true
        }
    }
    else if components.second! > 0 {
        time = String(components.second!) + " second"
        if components.second! > 1 {
            plural = true
        }
    }
    else {
        time = "Instantly"
    }
    
    if plural {
        time += "s"
        return time
    }
    else {
        return time
    }
}

func getWordStrength(model: Model) -> String {
    
    switch Int(model.passwordStrength * 5) {
    case 0:
        return ""
    case 1:
        return "Very Weak"
    case 2:
        return "Weak"
    case 3:
        return "Average"
    case 4:
        return "Strong"
    case 5:
        return "Very Strong"
    default:
        return ""
    }
}

func getColour(model: Model) -> Color {
    
    switch model.passwordStrength {
    case 0.2:
        return .red
    case 0.4:
        return .orange
    case 0.6:
        return .yellow
    case 0.8:
        return .green
    case 1:
        return .blue
    default:
        return .red
    }
}

func saveLogin(username: String, password: String, website: String) {
    // Create a dictionary to hold the information
    var keychainQuery: [String: Any] = [:]
    keychainQuery[kSecClass as String] = kSecClassInternetPassword
    keychainQuery[kSecAttrAccount as String] = username
    keychainQuery[kSecAttrServer as String] = website
    keychainQuery[kSecValueData as String] = password.data(using: .utf8)
    
    // Add the information to the keychain
    let status = SecItemAdd(keychainQuery as CFDictionary, nil)
    if (status != errSecSuccess) {
        if let err = SecCopyErrorMessageString(status, nil) {
            print("Error: \(err)")
        }
    }
}

