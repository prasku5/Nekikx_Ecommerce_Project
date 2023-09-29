package com.aurorion.aurorionbackend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.aurorion.aurorionbackend.components.UserSignUp;
import com.aurorion.aurorionbackend.repository.UserRepository;
import com.aurorion.aurorionbackend.model.User;
import com.aurorion.aurorionbackend.enums.Role;


@RestController
public class SignUpController {

    @Autowired
    private UserRepository UserRepository;

    @PostMapping("/signup")
    public String signUp(@RequestBody UserSignUp UserSignUp) {
        // Check to see if the current email address has already been registered.
        boolean isEmailExists = UserRepository.existsByEmail(UserSignUp.getEmail());
        if (isEmailExists) {
            return "Email already exists!";
        } else {

        // Create a new User entity from the signup data
        User user = new User();
        user.setFirstName(UserSignUp.getFirstName());
        user.setLastName(UserSignUp.getLastName());
        user.setEmail(UserSignUp.getEmail());
        user.setPassword(UserSignUp.getPassword());
        user.setRole(Role.user);

        // Save the user to the database
        UserRepository.save(user);
        // Return a response if needed
        return "Signup successful!";


        } 
    }
}