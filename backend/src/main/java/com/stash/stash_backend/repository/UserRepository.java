// Repository interface for database operations for User entity
package com.stash.stash_backend.repository;

import com.stash.stash_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// Extends JpaRepository to provide CRUD operations for User entities
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // checks in a user exists with the given email
}
