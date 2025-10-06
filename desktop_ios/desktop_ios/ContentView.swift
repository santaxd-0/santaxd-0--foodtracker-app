//
//  ContentView.swift
//  desktop_ios
//
//  Created by Alexander Zhuravel on 06.10.2025.
//

import SwiftUI

struct ContentView: View {
    @State private var email: String = ""
    
    var body: some View {
        VStack {
            Text("Log in")
                .font(.largeTitle)
                .fontWeight(.bold)
            VStack {
                Text("Hello!!!")
                TextField("Enter your email", text: $email)
            }.padding(10)
        }
        .padding()
    }
}
