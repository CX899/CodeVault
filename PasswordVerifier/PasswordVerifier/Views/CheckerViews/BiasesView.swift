//
//  BiasesView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-22.
//

import SwiftUI

struct BiasesView: View {
    
    @EnvironmentObject var model : Model
    @State var biasField = ""
    @AppStorage("ShowBiases") var showBiases = false
    
    var body: some View {
        
        VStack(alignment: .leading){
            
            
            Button {
                withAnimation(.easeInOut) {
                    self.showBiases = false
                }
            } label: {
                Image(systemName: "multiply.circle.fill")
                    .foregroundColor(.gray)
            }
            
            Text("Biases Checker")
                .padding(.vertical)
                .font(.title)
                .bold()
            
            HStack {
                Image(systemName: "lock")
                
                TextField("Enter Your Biases" , text: $biasField)
                    .keyboardType(.default)
                    .disableAutocorrection(true)
                    .onSubmit {
                        
                        withAnimation(.easeInOut) {
                            model.biases.append(biasField)
                        }
                        
                        self.biasField = ""

                        
                    }
                
                Spacer()
                
                if biasField != "" {
                    
                    Button {
                        
                        withAnimation(.easeInOut) {
                            model.biases.append(biasField)
                        }
                        
                        self.biasField = ""
                        
                    } label: {
                        Image(systemName: "chevron.right.circle.fill")
                            .foregroundColor(.gray)
                    }
                }
            }
            .padding()
            .background(.ultraThinMaterial)
            .cornerRadius(15)
            
            if !model.biases.isEmpty {
                Text("List of Biases")
                    .bold()
                    .padding(.top)
            }
            

            ForEach(model.biases, id : \.self) { item in
                Text(item)
            }
            
            
            HStack {
                
                Button {
                    
                    withAnimation(.easeInOut) {
                        model.biases = []
                    }
                    
                } label: {
                    Text("Clear")
                        .foregroundColor(Color("BarColour"))
                        .padding(4)
                        .background(.gray)
                        .cornerRadius(8)
                }
                
                Spacer()
                
                Button {
                    
                    model.accountBiases()
                    
                } label: {
                    Text("Account For Biases")
                        .foregroundColor(Color("BarColour"))
                        .padding(4)
                        .background(.gray)
                        .cornerRadius(8)
                }
            }
            .padding(.top)
            
            
            
        }
        .padding()
        .background(.ultraThinMaterial)
        .cornerRadius(20)
    }
}

struct BiasesView_Previews: PreviewProvider {
    static var previews: some View {
        BiasesView()
    }
}
