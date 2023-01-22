//
//  PasswordStrengthView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import SwiftUI


struct StrengthBarView: View {
    
    @EnvironmentObject var model : Model
    @State var barColour : Color = .clear
    @AppStorage("ShowLogin") var showLogin = false
    @AppStorage("ShowSuggestions") var showSuggestions = false
    @AppStorage("ShowGraph") var showGraph = false
    
    var body: some View {
        
        ZStack (alignment: .leading){
            
            RoundedRectangle (cornerRadius: 20, style: .continuous)
                .frame (height: 10)
                .foregroundColor(Color("BarColour").opacity(0.1))
            
            // Percent bar that goes up
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .frame(maxWidth: ((showLogin || showSuggestions || showGraph) ? 500 * CGFloat(model.passwordStrength) : 700 * CGFloat(model.passwordStrength)), maxHeight: 10)
                .animation(.linear, value: model.passwordStrength)
                .foregroundColor(getColour(model: model))
            
        }
        .onChange(of: model.textField, perform: { _ in
            model.checkStrength()
        })
        .onAppear {
            model.checkStrength()
        }
    }
    
    
    
    
    
    
    
}

struct PasswordStrengthView_Previews: PreviewProvider {
    static var previews: some View {
        StrengthBarView()
    }
}
