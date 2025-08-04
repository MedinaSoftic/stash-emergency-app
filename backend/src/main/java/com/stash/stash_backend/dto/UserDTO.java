//This class is used to safely expose non-sensitive user data to the frontend (like id, name, and email), avoiding exposing passwords.
package com.stash.stash_backend.dto;

public class UserDTO {
    private Long id;
    private String name;
    private String email;

    public UserDTO() {}

    // Constructor to initialize UserDTO with id, name, and email
    public UserDTO(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}