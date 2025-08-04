// main application class for the Stash backend
package com.stash.stash_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // enables auto-configuration and component scanning
public class StashBackendApplication {

	// main() method to launch the Spring Boot application
	public static void main(String[] args) {
		SpringApplication.run(StashBackendApplication.class, args);
	}

}
