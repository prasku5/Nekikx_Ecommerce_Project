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
    public void executeSqlStatement(String confirmationIdSaved) {
        // Modify the SQL statement as needed
          String sql = "INSERT INTO order_items_joined (confirmation_id, name, price, size, color, category_name, order_time, total_items, order_total) " +
      "SELECT oi.confirmation_id, oi.name, oi.price, oi.size, oi.color, oi.category_name, od.order_time, od.total_items, od.order_total " +
      "FROM order_items oi " +
      "JOIN order_details od ON oi.confirmation_id = od.confirmation_id " +
      "WHERE oi.confirmation_id ='" + confirmationIdSaved.toString() + "'";
        
        System.out.println("Executing SQL Statement:");
        System.out.println(sql);
        System.out.println("With confirmationId: " + confirmationIdSaved);

       try {
            // Execute the SQL statement
            int rowsAffected = entityManager.createNativeQuery(sql).executeUpdate();

            System.out.println("SQL Execution Successful. Rows Affected: " + rowsAffected);

            Thread.sleep(1000);

        } catch (Exception e) {
            System.err.println("Error executing SQL Statement: " + e.getMessage());
            e.printStackTrace();
        }
    }
}