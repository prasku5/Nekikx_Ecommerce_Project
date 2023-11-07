package com.aurorion.aurorionbackend.model;
import javax.persistence.*;

@Entity
@Table(name = "product_reviews")
public class ProductReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long productId;

    @Column(nullable = false)
    private String reviewerName;

    @Column(nullable = false)
    private String reviewText;

    // Getters and setters
}