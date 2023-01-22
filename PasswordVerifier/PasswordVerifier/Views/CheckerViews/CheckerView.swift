//
//  PasswordCheckerView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import SwiftUI

struct CheckerView: View {
    
    @EnvironmentObject var model:Model
    @AppStorage("ShowGraph") var showGraph = false
    @State var extraInfo = false
    
    var body: some View {
        
        
        VStack (alignment: .leading) {
            
            HStack(alignment: .top) {
                Text("Password Strength Checker")
                    .font(.title)
                    .bold()
                    .padding(.bottom)
                
                Spacer()
                
                Button {
                    
                    withAnimation(.easeIn) {
                        self.showGraph.toggle()
                    }
                    
                } label: {
                    Image(systemName: "info.circle")
                        .padding(.top, 8)
                }
            }
            
            
            Divider()
            
            
            TextFieldView()
                .frame(minHeight:45, maxHeight: 120)
                
            
            
            
            if model.textField != "" {
                
                StrengthBarView()
                    .padding(.top)
                
                HStack  {
                    
                    
                    Text("Time to Crack: ") + Text(timeFrame(model: model))
                    
                    
                    Spacer()
                    
                    Text(getWordStrength(model: model))
                        .foregroundColor(getColour(model: model))
                    
                }
            }
            
            
        }
        .padding()
        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 20 , style: .continuous))

        
        
    }
    
    
}


struct PasswordCheckerView_Previews: PreviewProvider {
    static var previews: some View {
        CheckerView()
    }
}
