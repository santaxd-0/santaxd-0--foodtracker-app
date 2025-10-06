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
    
    func logIn(){
        print("Login user")
    }
    
    var body: some View {
        HStack{
            VStack(spacing: 30) {
                Text("Log in")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                VStack(spacing: 20) {
                    VStack(alignment: .leading, spacing: 15) {
                        Text("Enter your email: ")
                            .font(.system(size: 16))
                        TextField("Enter your email", text: $email)
                            .lineLimit(3, reservesSpace: true)
                            .textFieldStyle(.roundedBorder)
                            .frame(width: 300)
                            .font(.system(size: 16))
                    }
                    VStack(alignment: .leading, spacing: 15) {
                        Text("Enter your password: ")
                            .font(.system(size: 16))
                        SecureField("Enter your password", text: $password)
                            .lineLimit(3, reservesSpace: true)
                            .textFieldStyle(.roundedBorder)
                            .frame(width: 300)
                            .font(.system(size: 16))
                    }
                    Button(action: logIn){
                        Label("Sign In", systemImage: "arrow.up")
                            .frame(width: 290, height: 30)
                            .font(.system(size: 16))
                            .bold()
                    }
                    .background(
                        Color(red: 0.01, green: 0.5, blue: 0.32)
                    )
                    .cornerRadius(10)
                }
            }
            .padding()
            
            Image("loginImage")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 400)
        }
    }
}
