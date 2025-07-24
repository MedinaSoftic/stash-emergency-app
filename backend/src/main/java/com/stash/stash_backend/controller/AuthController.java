package com.stash.stash_backend.controller;

import com.stash.stash_backend.model.User;
import com.stash.stash_backend.dto.LoginRequest;
import com.stash.stash_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    //endpoint to register a new user
    @PostMapping(value = "/register", consumes = "application/json")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already in use");
    }
        user.setPassword(encoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return  ResponseEntity.ok(savedUser);
    }

    //endpoint to login a user
    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
    }

    User user = userOpt.get();
    if (!encoder.matches(loginRequest.getPassword(), user.getPassword())) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect password");
        }
    return ResponseEntity.ok("Login successful");
    }
}
