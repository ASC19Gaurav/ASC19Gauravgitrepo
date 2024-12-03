package com.sports.springboot.controller;

import com.sports.springboot.service.AdminService;
import com.sports.springboot.entity.Admin;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
@Autowired
    private AdminService adminService;
    @GetMapping
    public List<Admin> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Admin getUserById(@PathVariable Long id) {
        return adminService.getUserById(id);
    }

    @PostMapping
    public Admin createUser(@RequestBody Admin user) {
        return adminService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        adminService.deleteUser(id);
    }
}
