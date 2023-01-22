//
//  SuggestionView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import SwiftUI

struct SuggestionView: View {
    
    @EnvironmentObject var model : Model
    @AppStorage("ShowSuggestions") var showSuggestions = false
    

    var body: some View {
        
        VStack (alignment: .leading) {
            
            HStack (alignment: .top) {
                Text("Suggestions")
                    .font(.title)
                    .bold()
                    .padding(.bottom)
                
                Spacer()
                
                Button {
                    
                    withAnimation(.easeIn) {
                        self.showSuggestions.toggle()
                    }
                    
                } label: {
                    Image(systemName: "info.circle")
                        .padding(.top, 8)
                }
            }
            
            
            if (model.isSymbol || model.isDigit || model.isUpper || model.isCount) && model.passwordStrength == 1 {
                
                Text("That is a Strong Password!")
                
            }
            else {
                

                Group {
                    if !model.isCount {
                        Text("•").bold() + Text(" Make Your Password Longer than 12 Characters")
                    }
                    
                    if !model.isUpper {
                        Text("•").bold() + Text(" Add Capitals to Your Password")
                    }
                    
                    if !model.isDigit {
                        Text("•").bold() + Text(" Add Numbers to Your Password")
                    }
                    
                    if !model.isSymbol {
                        Text("•").bold() +  Text(" Add Symbols to Your Password")
                    }
                }
                
            }
            
            
            
            
            

        }
        .padding()
        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 20 , style: .continuous))

        
        
    }
}

struct SuggestionView_Previews: PreviewProvider {
    static var previews: some View {
        SuggestionView()
    }
}
