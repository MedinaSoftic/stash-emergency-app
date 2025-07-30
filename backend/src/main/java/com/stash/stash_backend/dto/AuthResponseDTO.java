package com.stash.stash_backend.dto;

public class AuthResponseDTO {
    private UserDTO user;
    private String token;

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
