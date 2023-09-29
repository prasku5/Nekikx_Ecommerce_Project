package com.aurorion.aurorionbackend.common;

import java.time.LocalDateTime;

public class ApiResponse {

    private final boolean success;
	private final String message;
	private String cookieToken;
	// try again
	
	public String getCookieToken() {
		return cookieToken;
	}

	public void setCookieToken(String cookieToken) {
		this.cookieToken = cookieToken;
	}

	public ApiResponse(boolean success, String message, String cookieToken) {
		this.success = success;
		this.message = message;
		this.cookieToken = cookieToken;
	}

	public boolean isSuccess() {    
		return success;
	}

	public String getMessage() {
		return message;
	}
	
	public String getTimestamp() {
		return LocalDateTime.now().toString();
	}
    
}
