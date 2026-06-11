package com.contactmanagement.contact_management.controller;

import com.contactmanagement.contact_management.entity.User;
import com.contactmanagement.contact_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.contactmanagement.contact_management.dto.LoginRequest;
import com.contactmanagement.contact_management.security.JwtUtil;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(
            @RequestBody User user) {

        if (userService.existsByUsername(
                user.getUsername())) {

            return ResponseEntity.badRequest()
                    .body("Username already exists");
        }

        userService.saveUser(user);

        return ResponseEntity.ok(
                "User Registered Successfully");
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        User user = userService.findByUsername(
                request.getUsername());

        if (user != null &&
                user.getPassword().equals(
                        request.getPassword())) {

            return jwtUtil.generateToken(
                    user.getUsername());
        }

        return "Invalid Username or Password";
    }
}