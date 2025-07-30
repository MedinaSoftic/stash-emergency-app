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

    public EmergencyReportController(EmergencyReportRepository reportRepo, UserRepository userRepo) {
        this.emergencyReportRepository = reportRepo;
        this.userRepository = userRepo;
    }

    @GetMapping
    public List<EmergencyReport> getAllReports() {
        return emergencyReportRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createReport(@RequestBody EmergencyReport report) {
        if (report.getUser() == null || report.getUser().getId() == null) {
            return ResponseEntity.badRequest().body("User is required.");
        }

        // Fetch managed user
        User managedUser = userRepository.findById(report.getUser().getId()).orElse(null);
        if (managedUser == null) {
            return ResponseEntity.badRequest().body("User not found.");
        }

        report.setUser(managedUser);
        EmergencyReport saved = emergencyReportRepository.save(report);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public EmergencyReport getReportById(@PathVariable Long id) {
        return emergencyReportRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteReport(@PathVariable Long id) {
        emergencyReportRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public EmergencyReport updateReport(@PathVariable Long id, @RequestBody EmergencyReport updatedReport) {
        EmergencyReport report = emergencyReportRepository.findById(id).orElseThrow();
        report.setType(updatedReport.getType());
        report.setDescription(updatedReport.getDescription());
        report.setLocation(updatedReport.getLocation());
        report.setZipCode(updatedReport.getZipCode());
        return emergencyReportRepository.save(report);
    }

    @GetMapping("/dto")
    public List<EmergencyReportDTO> getAllReportsAsDTO() {
        return emergencyReportRepository.findAll().stream()
                .map(EmergencyReportDTO::fromEntity)
                .toList();
    }

    @GetMapping("/zipcode/{zipCode}")
    public List<EmergencyReport> getReportsByZip(@PathVariable String zipCode) {
        return emergencyReportRepository.findByZipCode(zipCode);
    }

    @GetMapping("/user/{userId}")
    public List<EmergencyReport> getReportsByUser(@PathVariable Long userId) {
        return emergencyReportRepository.findByUserId(userId);
    }
}
