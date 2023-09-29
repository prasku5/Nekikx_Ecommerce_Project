package com.aurorion.aurorionbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.aurorion.aurorionbackend.*")
public class AurorionBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AurorionBackendApplication.class, args);
	}

}
	