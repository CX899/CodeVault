//
//  PasswordGeneraorView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import SwiftUI

struct GeneratorView: View {
    
    enum Field: Hashable {
        case pass
        case phrase
    }
    
    @EnvironmentObject var model : Model
    @EnvironmentObject var authModel : AuthModel
    @AppStorage("ShowLogin") var showLogin = false
    @State var password = ""
    @FocusState private var focusedField: Field?
    @Binding var length : Float
    
    var body: some View {
        
        VStack(alignment: .leading) {
            
            Text("Password Generator Tool")
                .font(.title)
                .bold()
            
            
            HStack {
                Text("Acronym: ")
                    .bold()
                    .padding(.trailing, 12)
                
                Spacer()
                
                
                TextField("", text: $model.generatedPass, axis: .vertical)
                    .focused($focusedField, equals: .pass)
                    .disableAutocorrection(true)
                    .onChange(of: model.generatedPass) { _ in
                        if focusedField == .pass {
                            model.generatePasswordAcro()
                        }
                        
                        self.length = Float(model.generatedPass.count)
                        
                    }
                    .multilineTextAlignment(.trailing)
                    
                
                Button {
                    
                    showLogin = true
                    authModel.passwordField = model.generatedPass
                    
                    
                } label : {
                    Image(systemName: "chevron.forward.circle.fill")
                        .foregroundColor(.blue)

                }
                
            }
            .padding(.bottom)
            
            HStack (alignment: .top) {
                Text("Phrase: ")
                    .bold()
                
                Spacer()

                TextField("", text: $model.keyPhrase, axis: .vertical)
                    .disableAutocorrection(true)
                    .focused($focusedField, equals: .phrase)
                    .onChange(of: model.keyPhrase) { _ in
                        
                        if focusedField == .phrase {
                            model.generateAcronym()
                        }
                    }
                    .multilineTextAlignment(.trailing)
                    .lineLimit(1...3)
                    
                    
                
                //Text(model.keyPhrase)
                    
                
                Button {
                    
                    showLogin = true
                    authModel.passwordField = model.keyPhrase
                    
                } label : {
                    Image(systemName: "chevron.forward.circle.fill")
                        .foregroundColor(.blue)

                }
                
            }
            .padding(.bottom)
                        
            HStack {
                
                Text("Password Length: ").bold()
                
                Spacer()
                
                Text(String(Int(length)))
            }
           
            
            
            
            Slider(value: $length, in: 12...18)
            
            
            HStack {
                
                Menu("Test Password") {
                    
                    Button {
                        
                        model.testPassword()
                    } label: {
                        Text("Test Acronym")
                    }
                    
                    Button {
                        
                        model.testPhrase()
                        
                    } label: {
                        Text("Test Phrase")
                    }

                }
                .foregroundColor(Color("BarColour"))
                .padding(4)
                .background(.gray)
                .cornerRadius(8)
                
                
                Spacer()
                
                Button {
                    
                    if length < 12 || length > 18 {
                        
                        withAnimation(.linear) {
                            self.length = Float(15)

                        }
                    }
                    
                    model.getPassword(length: Int(length))
                    
                } label: {
                    Text("Generate Password")
                        .foregroundColor(Color("BarColour"))
                        .padding(4)
                        .background(.blue)
                        .cornerRadius(8)
                }
            }
            
        }
        .padding()
        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 20 , style: .continuous))
    }
}


