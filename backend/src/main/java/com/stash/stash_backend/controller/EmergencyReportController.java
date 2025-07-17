package com.stash.stash_backend.controller;


import com.stash.stash_backend.model.EmergencyReport;
import com.stash.stash_backend.repository.EmergencyReportRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class EmergencyReportController {

    private final EmergencyReportRepository emergencyReportRepository;

    public EmergencyReportController(EmergencyReportRepository reportRepository) {
        this.emergencyReportRepository = reportRepository;
    }

    @GetMapping
    public List<EmergencyReport> getAllReports() {
        return emergencyReportRepository.findAll();
    }

    @PostMapping
    public EmergencyReport createReport(@RequestBody EmergencyReport report) {
        return emergencyReportRepository.save(report);
    }

    @GetMapping("/{id}")
    public EmergencyReport getReportById(@PathVariable Long id) {
        return emergencyReportRepository.findById(id).orElse(null);
    }

    @DeleteMapping{"/{id}"}
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

    @GetMapping("/zipcode/{zipCode}")
    public List<EmergencyReport> getReportsByZip(@PathVariable String zipCode) {
        return emergencyReportRepository.findByZipCode(zipCode);
    }

    @GetMapping("/user/{userId}")
    public List<EmergencyReport> getReportsByUser(@PathVariable Long userId) {
        return emergencyReportRepository.findByUserId(userId);
    }
}
