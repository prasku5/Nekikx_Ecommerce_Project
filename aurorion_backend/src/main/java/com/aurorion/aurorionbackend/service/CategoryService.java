package com.aurorion.aurorionbackend.service;

import com.aurorion.aurorionbackend.model.Category;

import com.aurorion.aurorionbackend.repository.CategoryRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public void createCategory(Category category) {
        categoryRepo.save(category);
    }

    // public List<Category> listCategory() {
    //     return categoryRepo.findAll();
    // }

}