//
//  ContentView.swift
//  desktop_ios
//
//  Created by Alexander Zhuravel on 06.10.2025.
//

import SwiftUI

struct ContentView: View {
    @State private var email: String = ""
    @State private var password: String = ""
    
    var body: some View {
        HStack{
            VStack(spacing: 20) {
                Text("Log in")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                VStack(spacing: 15) {
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Enter your email: ")
                        TextField("Enter your email", text: $email)
                            .lineLimit(3, reservesSpace: true)
                            .textFieldStyle(.roundedBorder)
                            .frame(width: 300)
                    }
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Enter your password: ")
                        SecureField("Enter your password", text: $password)
                            .lineLimit(3, reservesSpace: true)
                            .textFieldStyle(.roundedBorder)
                            .frame(width: 300)
                    }
                }
            }.padding()
            Image("loginImage")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 400)
        }
    }
}
