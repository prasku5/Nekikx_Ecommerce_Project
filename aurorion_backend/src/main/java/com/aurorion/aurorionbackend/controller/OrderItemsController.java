package com.aurorion.aurorionbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@CrossOrigin
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

    // @PostMapping
    // public orderItemsPayload saveOrderItems(@RequestBody orderItemsPayload orderItemsPayload) {
    //     // System.out.printf("Saving order items %s%n", orderItemsPayload.getCategoryName());

    //     orderItemsPayload savedOrderItems = orderItemsService.saveOrderItems(orderItemsPayload);

    //     System.out.printf("Order items saved successfully %s%n", orderItemsPayload);
    //     return savedOrderItems;
    // }
     @PostMapping
    public ResponseEntity<List<orderItemsPayload>> saveOrderItems(@RequestBody List<orderItemsPayload> orderItemsPayloadList) {
        System.out.println("Received payload in the backend for orderitems is : " + orderItemsPayloadList);
        if (orderItemsPayloadList != null && !orderItemsPayloadList.isEmpty()) {
            orderItemsService.saveOrderItems(orderItemsPayloadList);
            System.out.println("Order items saved successfully.");
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            System.out.println("No items in the order, not saving.");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
