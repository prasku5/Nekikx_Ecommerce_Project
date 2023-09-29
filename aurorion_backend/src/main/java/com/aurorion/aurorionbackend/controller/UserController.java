package com.aurorion.aurorionbackend.controller;
import com.aurorion.aurorionbackend.components.*;
import com.aurorion.aurorionbackend.exceptions.AuthenticationFailException;
import com.aurorion.aurorionbackend.exceptions.CustomException;
import com.aurorion.aurorionbackend.model.User;
import com.aurorion.aurorionbackend.repository.UserRepository;
import com.aurorion.aurorionbackend.service.AuthenticationService;
import com.aurorion.aurorionbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthenticationService authenticationService;

    @Autowired
    UserService userService;

    @GetMapping("/all")
    public List<User> findAllUser(@RequestParam("token") String token) throws AuthenticationFailException {
        authenticationService.authenticate(token);
        return userRepository.findAll();
    }

    @PostMapping("/Login")
    public UserSignInResponse Signup(@RequestBody UserSignIn UserSignIn) throws CustomException {
        return userService.signIn(UserSignIn);
    }
}