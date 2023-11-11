package com.aurorion.aurorionbackend.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
 
@Entity
@Table(name = "order_details")
public class OrderDetails {

    @Id
    private String confirmationId;  

    private Date orderTime;
    private int totalItems;
    private double orderTotal;

    public String getConfirmationId() {
        return confirmationId;
    }
    public void setConfirmationId(String confirmationId) {
        this.confirmationId = confirmationId;
    }
    public Date getOrderTime() {
        return orderTime;
    }
    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }
    public int getTotalItems() {
        return totalItems;
    }
    public void setTotalItems(int totalItems) {
        this.totalItems = totalItems;
    }
    public double getOrderTotal() {
        return orderTotal;
    }
    public void setOrderTotal(double orderTotal) {
        this.orderTotal = orderTotal;
    }
    // Constructors, getters, and setters
}
