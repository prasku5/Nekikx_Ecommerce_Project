package com.aurorion.aurorionbackend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import com.aurorion.aurorionbackend.components.UserSignIn;
import com.aurorion.aurorionbackend.repository.UserRepository;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import java.util.UUID;
import com.aurorion.aurorionbackend.config.UserMessageResponse;
import com.aurorion.aurorionbackend.components.UserSignInResponse;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@EnableAutoConfiguration
@RestController
public class SignInController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/login", produces = {"application/json"}, consumes = {"application/json"} , method = RequestMethod.POST)
    public ResponseEntity<UserSignInResponse> signIn(@RequestBody UserSignIn userSignIn, HttpServletResponse response) {
        // Check if the user exists based on the provided email and password
        boolean existingUser = userRepository.findByEmailAndPassword(userSignIn.getEmail(), userSignIn.getPassword());
        
        System.out.println("existingUser: " + existingUser);

        UserSignInResponse signInResponse;

        if (existingUser) {
            // User exists, perform sign-in actions (e.g., generate JWT, set session, etc.)
            // For simplicity, let's generate a random token as an example
            String token = UUID.randomUUID().toString();
            System.out.println("token: " + token);

            // Set the token as a cookie
            Cookie cookie = new Cookie("token", token);
            cookie.setMaxAge(24 * 60 * 60);  // Cookie will expire in 1 day
            cookie.setPath("/");
            response.addCookie(cookie);
        
            // Construct the response in UserSignInResponse
            signInResponse = new UserSignInResponse(true, UserMessageResponse.USER_LOGGED_IN_SUCCESSFULLY, token);
            
            System.out.println("signInResponse: " + signInResponse.getCookieToken());
             return new ResponseEntity<UserSignInResponse>(signInResponse,HttpStatus.OK);   // Specify the allowed methods for the actual request);
             
        } else {

            String token = null; 
            
            // Construct the response in UserSignInResponse
            signInResponse = new UserSignInResponse(false, UserMessageResponse.INVALID_CREDENTIALS, token);
            
            return new ResponseEntity<UserSignInResponse>(signInResponse,HttpStatus.BAD_REQUEST);   // Specify the allowed methods for the actual request);
        }
    }
}
