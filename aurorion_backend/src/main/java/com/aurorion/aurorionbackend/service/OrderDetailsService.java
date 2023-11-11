package com.aurorion.aurorionbackend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import com.aurorion.aurorionbackend.model.orderDetailsSql;
import com.aurorion.aurorionbackend.repository.OrderDetailsRepository;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@Configuration
@ComponentScan(basePackages = "com.aurorion.aurorionbackend.service")
public class OrderDetailsService {
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public List<orderDetailsSql> getAllOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    // Other CRUD methods (e.g., getById, save, update, delete) 
    
    public orderDetailsSql saveOrderDetails(orderDetailsSql orderDetails) {
        return orderDetailsRepository.save(orderDetails);
    }

}
