package com.sports.springboot.service;


import com.sports.springboot.repository.adminRepository;
import com.sports.springboot.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminService {

    @Autowired
    private adminRepository AdminRepo;

    public List<Admin> getAllUsers() {
        return AdminRepo.findAll();
    }

    public Admin createUser(Admin user) {
        return AdminRepo.save(user);
    }

    public Admin getUserById(Long id) {
        return AdminRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public void deleteUser(Long id) {
        AdminRepo.deleteById(id);
    }
}