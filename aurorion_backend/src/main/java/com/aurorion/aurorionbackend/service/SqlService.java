package com.aurorion.aurorionbackend.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class SqlService {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void executeSqlStatement(String confirmationId) {
        // Modify the SQL statement as needed
        String sql = "INSERT INTO order_items_joined (confirmation_id, name, price, size, color, category_name, order_time, total_items, order_total) " +
                     "SELECT confirmation_id, name, price, size, color, category_name, order_time, total_items, order_total " +
                     "FROM order_items " +
                     "JOIN order_details ON order_items.confirmation_id = order_details.confirmation_id " +
                     "WHERE order_items.confirmation_id = :confirmationId";
        
        System.out.println("Executing SQL Statement:");
        System.out.println(sql);
        System.out.println("With confirmationId: " + confirmationId);

       try {
            // Execute the SQL statement
            int rowsAffected = entityManager.createNativeQuery(sql)
                    .setParameter("confirmationId", confirmationId)
                    .executeUpdate();

            System.out.println("SQL Execution Successful. Rows Affected: " + rowsAffected);
        } catch (Exception e) {
            System.err.println("Error executing SQL Statement: " + e.getMessage());
            e.printStackTrace();
        }
    }
}