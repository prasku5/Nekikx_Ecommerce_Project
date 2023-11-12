package com.aurorion.aurorionbackend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import com.aurorion.aurorionbackend.service.SqlService;


@RestController
public class SqlController {
    @Autowired
    private SqlService sqlService; // Create a service to handle the SQL execution

    @PostMapping("/execute-sql")
    public ResponseEntity<String> executeSql(@RequestBody Map<String, String> requestBody) {
        String confirmationIdSaved = requestBody.get("confirmationIdSaved");
        System.out.println("Confirmation ID: " + confirmationIdSaved);
        // Call the service method to execute the SQL statement
        sqlService.executeSqlStatement(confirmationIdSaved);

        return ResponseEntity.ok("SQL statement executed successfully");
    }    
}
