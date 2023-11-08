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
    public ProductReview addReview(@RequestBody ProductReview productReview) 
    {
        // System.out.println(" entered into ProductReviewController");
        // System.out.println("productReview: " + productReview);
        // System.out.println("productReview.getProductId(): " + productReview.getProductId());
        // System.out.println("productReview.getReviewerName(): " + productReview.getReviewerName());
        // System.out.println("productReview.getStars(): " + productReview.getStars());
        // System.out.println("productReview.getReviewText(): " + productReview.getReviewText());

        return reviewService.saveProductReview(productReview);
    }

    @GetMapping("/product/{productId}")
    public List<ProductReview> getReviewsByProductId(@PathVariable String productId) {
        System.out.println(" entered into ProductReviewController");
        return reviewService.getProductReviews(productId);
    }
}
