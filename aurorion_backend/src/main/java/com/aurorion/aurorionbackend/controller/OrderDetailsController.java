package com.aurorion.aurorionbackend.controller;
import com.aurorion.aurorionbackend.model.OrderDetails;
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
    public List<OrderDetails> getAllOrderDetails() {
        return orderDetailsService.getAllOrderDetails();
    }

    // Other CRUD endpoints (e.g., getById, create, update, delete)

    @PostMapping
    public OrderDetails addOrderDetails(@RequestBody OrderDetails orderDetails) {
        return orderDetailsService.saveOrderDetails(orderDetails);
    }

}
