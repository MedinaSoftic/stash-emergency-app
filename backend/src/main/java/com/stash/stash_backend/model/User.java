// This class represents the User entity in the database, with fields for id, name, email, password, and a list of associated EmergencyReports.
package com.stash.stash_backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.List;

@Entity // Indicates that this class is a JPA entity (table in DB)
public class User {

    @Id // Primary key for the User entity
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generates the ID
    private Long id;

    private String name;
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // Hides password from being serialized in responses
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL) // One user can have many emergency reports
    @JsonManagedReference // Prevents infinite recursion during JSON serialization
    private List<EmergencyReport> reports;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<EmergencyReport> getReports() {
        return reports;
    }

    public void setReports(List<EmergencyReport> reports) {
        this.reports = reports;
    }
}
