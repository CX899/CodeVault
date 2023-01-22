//
//  ContentView.swift
//  PasswordVerifier
//
//  Created by Gordon on 2023-01-21.
//

import SwiftUI

struct ContentView: View {
    
    @EnvironmentObject var model : Model
    @EnvironmentObject var alertModel : AlertModel
    @AppStorage("ShowLogin") var showLogin = false
    @AppStorage("ShowSuggestions") var showSuggestions = false
    @AppStorage("ShowGraph") var showGraph = false
    @State var length : Float = 15
    @State var locked = false
    @State var page = 0
    @State var showSecondPane = false
    
    var body: some View {
        
        
        ZStack(alignment: .center) {
            Image("Background")
                .resizable()
                .scaledToFill()
                .ignoresSafeArea(.all)
            
            HStack(alignment: .center){
                
                
                ScrollView(showsIndicators: false) {
                    
                    GeneratorView(length: $length)
                    
                    CheckerView()

                    SuggestionView()

                }
                .frame(maxWidth: (showLogin || showSuggestions || showGraph) ? 500 : 700)
                
                .animation(.easeInOut, value: model.textField)
                
                if showLogin || showSuggestions || showGraph {
                    
                    VStack {
                        ScrollView(showsIndicators: false) {
                            
                            if showLogin {
                                LoginView()
                            }
                            
                            if showGraph {
                                GraphView(length: $length)
                            }
                            
                            if showSuggestions {
                                ExtraSuggestionsView()
                            }
                            
                        }
                        .frame(maxWidth: 500)
                        .frame(minHeight: 0, maxHeight: .infinity)
                        .ignoresSafeArea(.all)
                    }
                    .ignoresSafeArea(.all)
                    
                    
                }
                
                
                
            }
            .animation(.easeInOut, value: showLogin)
            .animation(.easeInOut, value: showSuggestions)
            .animation(.easeInOut, value: showGraph)
            .offset(y: UIScreen.main.bounds.height / 9)
            
            
            
            
            if alertModel.alertSavedPass {
                VStack {
                    
                    Image(systemName: locked ? "lock.fill" : "lock.open.fill")
                        .resizable()
                        .scaledToFit()
                        .animation(.easeIn, value: locked)
                    
                    //LOCALIZETEXT
                    Text("Password Saved!")
                        .bold()
                        .multilineTextAlignment(.center)
                }
                .padding(35)
                .frame(width: 200, height: 200)
                .background(.ultraThinMaterial)
                .cornerRadius(20)
                .onAppear{
                    self.locked = false
                    
                    Timer.scheduledTimer(withTimeInterval: 0.5, repeats: false) { timer in
                        withAnimation(.easeIn) {
                            self.locked = true
                        }
                        
                        Timer.scheduledTimer(withTimeInterval: 1, repeats: false) { timer in
                            withAnimation(.easeOut) {
                                alertModel.alertSavedPass = false
                                
                            }
                            
                            timer.invalidate()
                            
                        }
                        
                        timer.invalidate()
                    }
                }
            }
            
            
        }
        

        /*
        NavigationView {
            List {
                
                NavigationLink {
                    
                } label: {
                    Label("Checker", systemImage: "lock")
                }
                
                NavigationLink {
                    
                } label: {
                    Label("Generator", systemImage: "pencil")
                }
                
            }
            .listStyle(SidebarListStyle())
            .navigationTitle("Sidebar")
            
            CheckerView()
            
        }
         */
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
