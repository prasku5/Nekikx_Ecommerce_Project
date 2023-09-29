package com.aurorion.aurorionbackend.repository;

import com.aurorion.aurorionbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findAll(); // Existing method

    @Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE TRIM(u.email) = TRIM(:email)")
    boolean existsByEmail(@Param("email") String email);

    // New method to find a user by email and password
    @Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE TRIM(u.email) = TRIM(:email) AND u.password = :password")
    boolean findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

    User findByEmail(String email);

    User findUserByEmail(String email);
}   