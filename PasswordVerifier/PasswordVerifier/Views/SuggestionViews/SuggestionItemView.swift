//
//  SuggestionItemView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-22.
//

import SwiftUI

struct SuggestionItemView: View {
    
    @Binding var bool : Bool
    var title : String
    var message : String
    
    var body: some View {
        
        VStack {
            Button {
                
                withAnimation(.easeInOut) {
                    self.bool.toggle()
                }
                
            } label: {
                HStack (alignment: .top) {
                    
                    Text(title)
                        .bold()
                    
                    Spacer()
                    
                    Image(systemName: bool ? "chevron.down" : "chevron.up")
                        .offset(y: 3)
                }
                .foregroundColor(Color("BarColour"))
                .multilineTextAlignment(.leading)
                
            }
            
            if bool {
                Text(message)
                    .padding(.top)
            }
        }
        .padding()
        .background(.ultraThinMaterial)
        .cornerRadius(20)
        
    }
}

