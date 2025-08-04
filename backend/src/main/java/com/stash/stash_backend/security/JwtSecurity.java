// This class handles all JWT (JSON Web Token) operations for authentication.
package com.stash.stash_backend.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

@Component // Marks this class as a Spring Bean that can be injected elsewhere
public class JwtSecurity {

    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 10; // 10 hour expiration

    //Signing key for the JWT token
    private final Key key;

    //Constructor injects secret key from application properties and creates signing key
    public JwtSecurity(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    // Generate token using user email and id
    public String generateToken(String email, Long id) {
        return Jwts.builder()
                .setSubject(email)
                .claim("userId", id)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact(); // builds token string
    }

    // Extract email from token
    public String extractEmail(String token) {
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getSubject();
    }

    // Validate token
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}

