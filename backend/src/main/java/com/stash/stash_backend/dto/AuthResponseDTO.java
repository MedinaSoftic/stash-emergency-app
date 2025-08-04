// This DTO is used to send back the authenticated user details along with the JWT token after a successful login.
package com.stash.stash_backend.dto;

public class AuthResponseDTO {
    private UserDTO user;

    // JWT token string used for secure access to protected routes
    private String token;

    // Constructor that initializes the user(Id, name and email) and token fields
    public AuthResponseDTO(UserDTO user, String token) {
        this.user = user;
        this.token = token;
    }

    public UserDTO getUser() {
        return user;
    }

    public String getToken() {
        return token;
    }
}
