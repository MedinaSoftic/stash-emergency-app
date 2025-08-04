// This controller manages CRUD operations for Emergency Reports in the Stash backend application.
package com.stash.stash_backend.controller;

import com.stash.stash_backend.dto.EmergencyReportDTO;
import com.stash.stash_backend.model.EmergencyReport;
import com.stash.stash_backend.repository.EmergencyReportRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.stash.stash_backend.model.User;
import com.stash.stash_backend.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class EmergencyReportController {

    private final EmergencyReportRepository emergencyReportRepository;
    private final UserRepository userRepository;

    // Constructor injection for repositories
    public EmergencyReportController(EmergencyReportRepository reportRepo, UserRepository userRepo) {
        this.emergencyReportRepository = reportRepo;
        this.userRepository = userRepo;
    }

    //GET endpoint to retrieve all emergency reports (public reports)
    @GetMapping
    public List<EmergencyReport> getAllReports() {
        return emergencyReportRepository.findAll();
    }

    //POST endpoint to create a new emergency report, checks for valid user and associates the report with that user
    @PostMapping
    public ResponseEntity<?> createReport(@RequestBody EmergencyReport report) {
        if (report.getUser() == null || report.getUser().getId() == null) {
            return ResponseEntity.badRequest().body("User is required.");
        }

        // Fetch the managed user entity from the database
        User managedUser = userRepository.findById(report.getUser().getId()).orElse(null);
        if (managedUser == null) {
            return ResponseEntity.badRequest().body("User not found.");
        }

        report.setUser(managedUser);
        EmergencyReport saved = emergencyReportRepository.save(report);
        return ResponseEntity.ok(saved);
    }

    // GET endpoint to retrieve a specific emergency report by its ID
    @GetMapping("/{id}")
    public EmergencyReport getReportById(@PathVariable Long id) {
        return emergencyReportRepository.findById(id).orElse(null);
    }

    // DELETE endpoint to delete a specific emergency report by its ID/or button click
    @DeleteMapping("/{id}")
    public void deleteReport(@PathVariable Long id) {
        emergencyReportRepository.deleteById(id);
    }

    // PUT endpoint to update an existing emergency report by its ID
    @PutMapping("/{id}")
    public EmergencyReport updateReport(@PathVariable Long id, @RequestBody EmergencyReport updatedReport) {
        EmergencyReport report = emergencyReportRepository.findById(id).orElseThrow();
        report.setType(updatedReport.getType());
        report.setDescription(updatedReport.getDescription());
        report.setCity(updatedReport.getCity());
        report.setZipCode(updatedReport.getZipCode());
        return emergencyReportRepository.save(report);
    }

    // GET endpoint to retrieve all emergency reports as DTOs (without user info)
    @GetMapping("/dto")
    public List<EmergencyReportDTO> getAllReportsAsDTO() {
        return emergencyReportRepository.findAll().stream()
                .map(EmergencyReportDTO::fromEntity)
                .toList();
    }

    // GET endpoint to retrieve reports filtered by zip code
    @GetMapping("/zipcode/{zipCode}")
    public List<EmergencyReport> getReportsByZip(@PathVariable String zipCode) {
        return emergencyReportRepository.findByZipCode(zipCode);
    }

    // GET endpoint to retrieve reports created by a specific user(userId)
    @GetMapping("/user/{userId}")
    public List<EmergencyReport> getReportsByUser(@PathVariable Long userId) {
        return emergencyReportRepository.findByUserId(userId);
    }
}
