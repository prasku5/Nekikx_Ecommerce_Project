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

    // Other CRUD met   hods (e.g., getById, save, update, delete)
   // Other CRUD methods (e.g., getById, save, update, delete)
//   public List<orderItemsPayload> saveOrderItems(List<orderItemsPayload> orderItemsPayload) {
//         System.out.printf("Saving order items: %s\n", orderItemsPayload);

//         try {
//             Thread.sleep(1000); // Sleep for 1000 milliseconds (1 second)
//         } catch (InterruptedException e) {
//             Thread.currentThread().interrupt();
//             // Handle the exception (e.g., log or rethrow)
//         }

//         System.out.printf("Saving order items to database...\n");
//         List<orderItemsPayload> savedOrderItemsPayload = orderItemsRepository.saveAll(orderItemsPayload);
//         System.out.printf("Saved order items: %s\n", savedOrderItemsPayload);

//         return savedOrderItemsPayload;
//     }
// }


// Other CRUD methods (e.g., getById, save, update, delete)
    public List<orderItemsPayload> saveOrderItems(List<orderItemsPayload> orderItemsPayloadList) {
        System.out.printf("Saving order items:\n");

        try {
            Thread.sleep(1000); // Sleep for 1000 milliseconds (1 second)
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            // Handle the exception (e.g., log or rethrow)
        }

        System.out.printf("Saving order items to database...\n");
        List<orderItemsPayload> savedOrderItemsPayload = orderItemsRepository.saveAll(orderItemsPayloadList);
        System.out.printf("Saved order items:\n");

        return savedOrderItemsPayload;
    }
}