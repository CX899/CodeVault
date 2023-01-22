//
//  GraphView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-22.
//

import SwiftUI
import Charts

struct Item : Identifiable {
    var id = UUID()
    let type : String
    let value : Double
}
struct GraphView: View {
    
    @EnvironmentObject var model : Model
    @AppStorage("ShowGraph") var showGraph = false
    @Binding var length : Float

    var body: some View {

        
        let items : [Item] = [
            Item(type: "Your Password", value: log2(Double(model.crackTime) ?? 0)),
            Item(type: "Generated Password", value: log2(Double(model.generatedCrack) ?? 0))
        ]
        
        VStack(alignment: .leading){
            
            Button {
                withAnimation(.easeInOut) {
                    showGraph = false
                }
            } label: {
                Image(systemName: "multiply.circle.fill")
                    .foregroundColor(.gray)
            }
            
            Text("Password Strength Visualization")
                .padding(.vertical)
                .font(.title)
                .bold()
            
            Chart(items) { item in
                
                if item.value < 0 {
                    BarMark(
                        x: .value("Passwords", item.type),
                        y: .value("Profit", 0.0)

                    )
                    .foregroundStyle((item.type == "Your Password") ? getColour(model: model).gradient : Color.blue.gradient)
                }
                else if item .value > 1000 {
                    BarMark(
                        x: .value("Passwords", item.type),
                        y: .value("Profit", 1000.0)

                    )
                    .foregroundStyle((item.type == "Your Password") ? getColour(model: model).gradient : Color.blue.gradient)
                }
                else {
                    BarMark(
                        x: .value("Passwords", item.type),
                        y: .value("Profit", (item.value > 0) ? item.value : 0.0)

                    )
                    .foregroundStyle((item.type == "Your Password") ? getColour(model: model).gradient : Color.blue.gradient)
                }
                
            }
            .frame(height: 300)

            
            
        }
        .padding()
        .background(.ultraThinMaterial)
        .cornerRadius(20)
        .onAppear {
            model.getPassword(length: Int(length))
        }
    }

}

