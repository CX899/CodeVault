//
//  PasswordVerifierApp.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import SwiftUI

@main
struct PasswordVerifierApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(Model())
                .environmentObject(AuthModel())
                .environmentObject(AlertModel())
        }
    }
}
