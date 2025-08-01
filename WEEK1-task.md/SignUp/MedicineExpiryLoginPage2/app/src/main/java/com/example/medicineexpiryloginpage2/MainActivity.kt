package com.example.meditrack

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import android.content.Intent
class MainActivity : AppCompatActivity() {
    private lateinit var emailEditText: EditText
    private lateinit var passwordEditText: EditText
    private lateinit var loginButton: Button
    private lateinit var forgotPassword: TextView
    private lateinit var signupText: TextView
    private lateinit var googleLogin: ImageView
    private lateinit var facebookLogin: ImageView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        emailEditText = findViewById(R.id.emailEditText)
        passwordEditText = findViewById(R.id.passwordEditText)
        loginButton = findViewById(R.id.loginButton)
        forgotPassword = findViewById(R.id.forgotPassword)
        signupText = findViewById(R.id.signupText)

        googleLogin = findViewById(R.id.googleLogin)
        facebookLogin = findViewById(R.id.facebookLogin)


        loginButton.setOnClickListener {
            val email = emailEditText.text.toString()
            val password = passwordEditText.text.toString()

            if (email.isEmpty() || password.isEmpty()) {
                Toast.makeText(this, "Please enter both fields", Toast.LENGTH_SHORT).show()
            } else {
                // Add login logic here
                Toast.makeText(this, "Login Success", Toast.LENGTH_SHORT).show()
            }
        }

        forgotPassword.setOnClickListener {
            Toast.makeText(this, "Forgot password clicked", Toast.LENGTH_SHORT).show()
        }

        signupText.setOnClickListener {
            val intent = Intent(this, SignUpActivity::class.java)
            startActivity(intent)
        }

        googleLogin.setOnClickListener {
            Toast.makeText(this, "Google Login", Toast.LENGTH_SHORT).show()
        }

        facebookLogin.setOnClickListener {
            Toast.makeText(this, "Facebook Login", Toast.LENGTH_SHORT).show()
        }
    }
}