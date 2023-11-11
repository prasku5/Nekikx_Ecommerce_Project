package com.aurorion.aurorionbackend.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.BatchSize;

@Entity
@Table(name = "order_items")
@BatchSize(size = 1000)
public class orderItemsPayload {

    @Id
    @Column(name = "confirmation_id")
    private String confirmationId;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private double price;
    @Column(name = "size")
    private String size;
    @Column(name = "color")
    private String color;
    @Column(name = "category_name")
    private String categoryName;

    public String getConfirmationId() {
        return confirmationId;
    }
    public void setConfirmationId(String confirmationId) {
        this.confirmationId = confirmationId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getSize() {
        return size;
    }
    public void setSize(String size) {
        this.size = size;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public String getCategoryName() {
        return categoryName;
    }
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
    // Constructors, getters, and setters
}
