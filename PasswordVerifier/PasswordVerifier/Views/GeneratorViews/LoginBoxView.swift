//
//  LoginBoxView.swift
//  ValorantStoreChecker
//
//  Created by Gordon Ng on 2022-07-30.
//

import SwiftUI

struct LoginBoxView: View {
    
    enum Field: Hashable {
        case usernameField
        case passwordField
        case websiteField
    }
    
    @EnvironmentObject var authModel : AuthModel
    @State private var showPassword : Bool = true
    @FocusState private var focusedField: Field?
    
    var body: some View {
        
        VStack{
            
            HStack {
                Image(systemName: "globe")
                
                TextField("Website" , text: $authModel.websiteField)
                    .keyboardType(.default)
                    .foregroundColor(.white)
                    .disableAutocorrection(true)
                    .submitLabel(.continue)
                    .focused($focusedField, equals: .websiteField)
                    .onSubmit {
                        self.focusedField = .usernameField
                    }

            }
            .padding()
            .background(.ultraThinMaterial)
            .cornerRadius(15)
            
            HStack {
                Image(systemName: "person.circle")
                
                TextField(LocalizedStringKey("Username") , text: $authModel.usernameField)
                    .keyboardType(.default)
                    .foregroundColor(.white)
                    .disableAutocorrection(true)
                    .submitLabel(.continue)
                    .focused($focusedField, equals: .usernameField)
                    .onSubmit {
                        self.focusedField = .passwordField
                    }

            }
            .padding()
            .background(.ultraThinMaterial)
            .cornerRadius(15)
            
            
            HStack {
                
                Image(systemName: "lock")
                
                if showPassword {
                    TextField(LocalizedStringKey("Password"), text: $authModel.passwordField, axis: .vertical)
                        .keyboardType(.default)
                        .foregroundColor(.white)
                        .disableAutocorrection(true)
                        .submitLabel(.done)
                        .focused($focusedField, equals: .passwordField)
                        .lineLimit(1...3)

                }
                else {
                    
                    SecureField(LocalizedStringKey("Password"), text: $authModel.passwordField)
                        .keyboardType(.default)
                        .foregroundColor(.white)
                        .disableAutocorrection(true)
                        .submitLabel(.done)
                        .focused($focusedField, equals: .passwordField)
                }
                
                
                Button {
                    
                    showPassword.toggle()
                    
                    
                    
                } label: {
                    
                    Image(systemName: showPassword ? "eye" : "eye.slash")
                        .foregroundColor(Color("BarColour"))
                        .opacity(0.5)
                    
                }

                
            }
                .padding()
                .background(.ultraThinMaterial)
                .cornerRadius(15)
            
        }
  
    }
}

struct LoginBoxView_Previews: PreviewProvider {
    static var previews: some View {
        LoginBoxView()
    }
}
