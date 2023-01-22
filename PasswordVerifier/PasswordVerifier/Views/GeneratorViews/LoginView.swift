//
//  LoginView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-22.
//

import SwiftUI

struct LoginView: View {
    
    @EnvironmentObject var authModel : AuthModel
    @EnvironmentObject var alertModel : AlertModel
    @AppStorage("ShowLogin") var showLogin = false

    var body: some View {
        
        VStack(alignment: .leading) {
            
            Button {
                withAnimation(.easeOut) {
                    self.showLogin = false
                }
            } label: {
                Image(systemName: "multiply.circle.fill")
                    .foregroundColor(.gray)
                    .padding(.bottom)
            }

            
            
            Text("Save to Keychain")
                .font(.title)
                .bold()
            
            
            
            LoginBoxView()
                            
            HStack {
                Spacer()
                
                Button {
                    
                    alertModel.alertSavedPass = true
                    
                    saveLogin(username: authModel.usernameField, password: authModel.passwordField, website: authModel.websiteField)
                    
                    withAnimation(.easeInOut) {
                        authModel.usernameField = ""
                        authModel.passwordField = ""
                        authModel.websiteField = ""
                    }

                } label: {
                    Text("Save Password")
                        .foregroundColor(Color("BarColour"))
                        .padding(4)
                        .background(.blue)
                        .cornerRadius(8)
                }
            }
            
        }
        .padding()
        .background(.ultraThinMaterial)
        .cornerRadius(20)
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
