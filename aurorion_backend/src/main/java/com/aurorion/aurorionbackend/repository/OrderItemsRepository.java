package com.aurorion.aurorionbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.aurorion.aurorionbackend.model.OrderItems;

@Repository
public interface OrderItemsRepository extends JpaRepository<OrderItems, String> {

    // You can add custom queries or methods here if needed

}
