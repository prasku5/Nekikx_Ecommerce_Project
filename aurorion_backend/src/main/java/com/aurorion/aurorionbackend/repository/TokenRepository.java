package com.aurorion.aurorionbackend.repository;
import com.aurorion.aurorionbackend.model.AuthenticationTokenClass;
import com.aurorion.aurorionbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<AuthenticationTokenClass, Integer> {
    AuthenticationTokenClass findTokenByUser(User user);
    AuthenticationTokenClass findTokenByToken(String token);
}