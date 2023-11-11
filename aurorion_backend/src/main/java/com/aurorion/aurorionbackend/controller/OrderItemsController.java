package com.aurorion.aurorionbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.aurorion.aurorionbackend.model.orderItemsPayload;
import com.aurorion.aurorionbackend.service.OrderItemsService;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/order-items")
public class OrderItemsController {

    @Autowired
    private OrderItemsService orderItemsService;

    @GetMapping
    public List<orderItemsPayload> getAllOrderItems() {
        System.out.println("Getting all order items...");
        List<orderItemsPayload> orderItemsList = orderItemsService.getAllOrderItems();
        System.out.println("Order items retrieved successfully.");
        return orderItemsList;
    }

    // Other CRUD endpoints (e.g., getById, create, update, delete)

    @PostMapping
    public orderItemsPayload saveOrderItems(@RequestBody orderItemsPayload orderItemsPayload) {
        System.out.printf("Saving order items %s%n", orderItemsPayload);
        orderItemsPayload savedOrderItems = orderItemsService.saveOrderItems(orderItemsPayload);
        System.out.printf("Order items saved successfully %s%n", orderItemsPayload);
        return savedOrderItems;
    }
}
