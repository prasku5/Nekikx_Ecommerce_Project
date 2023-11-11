package com.aurorion.aurorionbackend.repository;
import com.aurorion.aurorionbackend.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, String> {

    // You can add custom queries or methods here if needed
    
}
 
