package com.aurorion.aurorionbackend.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.aurorion.aurorionbackend.model.ProductReview;
import com.aurorion.aurorionbackend.repository.ProductReviewRepository;

@Service
public class ProductReviewService {
   private final ProductReviewRepository reviewRepository;

    @Autowired
    public ProductReviewService(ProductReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public ProductReview saveProductReview(ProductReview productReview) {
        return reviewRepository.save(productReview);
    }

    public List<ProductReview> getProductReviews(Long productId) {
        return reviewRepository.findByProductId(productId);
    } 
}
