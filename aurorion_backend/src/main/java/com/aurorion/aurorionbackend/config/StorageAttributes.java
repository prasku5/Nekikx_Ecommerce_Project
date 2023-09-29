package com.aurorion.aurorionbackend.config;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
public class StorageAttributes {
/**
	 * Folder location for storing files
	 */
	private String location = System.getProperty("user.dir") + "/upload_directory";

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
    
}
