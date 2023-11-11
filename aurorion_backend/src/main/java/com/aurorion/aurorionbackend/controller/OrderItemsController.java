package com.aurorion.aurorionbackend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import com.aurorion.aurorionbackend.model.OrderItems;
import com.aurorion.aurorionbackend.service.OrderItemsService;
import java.util.List;

public class OrderItemsController {
    @Autowired
    private OrderItemsService orderItemsService;

    @GetMapping
    public List<OrderItems> getAllOrderItems() {
        return orderItemsService.getAllOrderItems();
    }
    // Other CRUD endpoints (e.g., getById, create, update, delete)
}
