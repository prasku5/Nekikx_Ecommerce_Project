package com.aurorion.aurorionbackend.controller;
import com.aurorion.aurorionbackend.model.orderDetailsSql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aurorion.aurorionbackend.service.OrderDetailsService;
import java.util.List;

@RestController
@RequestMapping("/order-details")
public class OrderDetailsController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @GetMapping
    public List<orderDetailsSql> getAllOrderDetails() {
        System.out.printf("Getting all order details%n");
        List<orderDetailsSql> orderDetailsList = orderDetailsService.getAllOrderDetails();
        System.out.printf("Retrieved %d order details%n", orderDetailsList.size());
        return orderDetailsList;
    }

    // Other CRUD endpoints (e.g., getById, create, update, delete)

    @PostMapping
    public orderDetailsSql addOrderDetails(@RequestBody orderDetailsSql orderDetails) {
        System.out.printf("Received request to add order details: %s%n", orderDetails);
        orderDetailsSql savedOrderDetails = orderDetailsService.saveOrderDetails(orderDetails);
        System.out.printf("Order details added successfully: %s%n", savedOrderDetails);
        return savedOrderDetails;
    }
    
}
