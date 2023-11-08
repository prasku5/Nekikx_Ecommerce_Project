package com.aurorion.aurorionbackend.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aurorion.aurorionbackend.model.ProductReview;

public interface ProductReviewRepository extends JpaRepository<ProductReview, Long> {
    
    List<ProductReview> findByProductId(String productId);
    
    
    
}


