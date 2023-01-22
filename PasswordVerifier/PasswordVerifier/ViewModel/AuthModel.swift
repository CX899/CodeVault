//
//  AuthModel.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-22.
//

import Foundation

class AuthModel : ObservableObject {
    
    @Published var usernameField = ""
    @Published var passwordField = ""
    @Published var websiteField = ""
    
}
