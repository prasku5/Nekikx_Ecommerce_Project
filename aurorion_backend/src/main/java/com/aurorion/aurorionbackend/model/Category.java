package com.aurorion.aurorionbackend.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "categories")

public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private Integer id;

    @Column(name = "category_name")

    private @NotBlank String categoryName;

    @Column(name = "category_description")
    private @NotBlank String categoryDescription;

    @Column(name = "image_url")

    private @NotBlank String imageURL;

    // Getter for 'id'
    public Integer getId() {
        return id;
    }

    // Setter for 'id'
    public void setId(Integer id) {
        this.id = id;
    }

    // Getter for 'categoryName'
    public String getCategoryName() {
        return categoryName;
    }

    // Setter for 'categoryName'
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    // Getter for 'categoryDescription'
    public String getCategoryDescription() {
        return categoryDescription;
    }

    // Setter for 'categoryDescription'
    public void setCategoryDescription(String categoryDescription) {
        this.categoryDescription = categoryDescription;
    }

    // Getter for 'imageURL'
    public String getimageURL() {
        return imageURL;
    }

    // Setter for 'imageURL'
    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}