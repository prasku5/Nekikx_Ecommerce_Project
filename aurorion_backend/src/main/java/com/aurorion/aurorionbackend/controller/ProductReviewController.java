package com.aurorion.aurorionbackend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.aurorion.aurorionbackend.model.ProductReview;
import com.aurorion.aurorionbackend.service.ProductReviewService;

@RestController
@RequestMapping("/reviews")
public class ProductReviewController {
    private final ProductReviewService reviewService;

    @Autowired
    public ProductReviewController(ProductReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ProductReview addReview(@RequestBody ProductReview productReview) {
        return reviewService.saveProductReview(productReview);
    }

    @GetMapping("/product/{productId}")
    public List<ProductReview> getReviewsByProductId(@PathVariable Long productId) {
        return reviewService.getProductReviews(productId);
    }
}
