package com.aurorion.aurorionbackend.service;
import com.aurorion.aurorionbackend.model.orderItemsPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import com.aurorion.aurorionbackend.repository.OrderItemsRepository;
import java.util.List;

@Service
@Configuration
@ComponentScan(basePackages = "com.aurorion.aurorionbackend.service")
public class OrderItemsService {

    @Autowired
    private OrderItemsRepository orderItemsRepository;

    public List<orderItemsPayload> getAllOrderItems() {
        return orderItemsRepository.findAll();
    }

    // Other CRUD methods (e.g., getById, save, update, delete)
    public List<orderItemsPayload> saveOrderItems(List<orderItemsPayload> orderItemsPayload) {
        return orderItemsRepository.saveAll(orderItemsPayload);
    }

}
