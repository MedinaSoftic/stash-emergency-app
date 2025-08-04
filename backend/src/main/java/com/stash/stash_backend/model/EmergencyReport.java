// This class represents an emergency report entity in the system.
package com.stash.stash_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity // Indicates that this class is a JPA entity
public class EmergencyReport {

    @Id // Primary key for the EmergencyReport entity
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto generates the ID
    private Long id;

    private String type;
    private String description;
    private String city;
    private String zipCode;
    private LocalDateTime timestamp = LocalDateTime.now();

   @ManyToOne // Many reports can be associated with one user
   @JoinColumn(name = "user_id") // Foreign key column in EmergencyReport table to reference User
   @JsonBackReference // Prevents infinite recursion during JSON serialization
   private User user;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
