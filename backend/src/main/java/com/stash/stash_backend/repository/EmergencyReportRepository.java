package com.stash.stash_backend.repository;

import com.stash.stash_backend.model.EmergencyReport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmergencyReportRepository extends JpaRepository<EmergencyReport, Long> {
    List<EmergencyReport> findByUserId(Long userId);
    List<EmergencyReport> findByZipCode(String zipCode);
}
