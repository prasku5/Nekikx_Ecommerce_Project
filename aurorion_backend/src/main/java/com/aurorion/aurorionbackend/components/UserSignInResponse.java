package com.aurorion.aurorionbackend.components;

public class UserSignInResponse {
    private boolean success;
    private String message;
    private String cookieToken;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCookieToken() {
        return cookieToken;
    }

    public void setCookieToken(String cookieToken) {
        this.cookieToken = cookieToken;
    }

    public UserSignInResponse(boolean success, String message, String cookieToken) {
        this.success = success;
        this.message = message;
        this.cookieToken = cookieToken;
    }
}