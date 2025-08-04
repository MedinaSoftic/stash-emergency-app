// This controller handles user registration and login, including password hashing and JWT token generation. Exposes Rest endpoints
package com.stash.stash_backend.controller;

import com.stash.stash_backend.dto.AuthResponseDTO;
import com.stash.stash_backend.dto.UserDTO;
import com.stash.stash_backend.model.User;
import com.stash.stash_backend.dto.LoginRequestDTO;
import com.stash.stash_backend.repository.UserRepository;
import com.stash.stash_backend.security.JwtSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") //this allows requests from the React frontend
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtSecurity jwtSecurity; // handles JWT token generation and validation

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(); // hashes passwords

    //endpoint to register a new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Password is required.");
        }

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already in use");
        }

        user.setPassword(encoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);

        //Return user info without password
        UserDTO dto = new UserDTO(savedUser.getId(), savedUser.getName(), savedUser.getEmail());
        return ResponseEntity.ok(dto);
    }

    //all users endpoint
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //endpoint to login a existing user
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isEmpty()) {
            System.out.println("User not found: " + loginRequest.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
    }

    User user = userOpt.get();
    System.out.println("Encoded password: " + user.getPassword());
    //compare passwords
    if (!encoder.matches(loginRequest.getPassword(), user.getPassword())) {
        System.out.println("Password mismatch!");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect password");
        }

        //Generate a JWT token with user ID and email
        String token = jwtSecurity.generateToken(user.getEmail(), user.getId());

        // Return user info and token
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("user", new UserDTO(user.getId(), user.getName(), user.getEmail()));
        responseBody.put("token", token);

        return ResponseEntity.ok(responseBody);
    }
}
