// This Data transfer object (DTO) is used to expose selected data from EmergencyReport entity to clients, ensuring encapsulation and security.
package com.stash.stash_backend.dto;

import com.stash.stash_backend.model.EmergencyReport;

import java.time.LocalDateTime;

//Fields included in the DTO to be sent to client
public class EmergencyReportDTO {
    private Long id;
    private String type;
    private String description;
    private String city;
    private String zipCode;
    private LocalDateTime timestamp;

    // Converts an EmergencyReport entity to an EmergencyReportDTO
    public static EmergencyReportDTO fromEntity(EmergencyReport report) {
        EmergencyReportDTO dto = new EmergencyReportDTO();
        dto.setId(report.getId());
        dto.setType(report.getType());
        dto.setDescription(report.getDescription());
        dto.setCity(report.getCity());
        dto.setZipCode(report.getZipCode());
        dto.setTimestamp(report.getTimestamp());
        return dto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
