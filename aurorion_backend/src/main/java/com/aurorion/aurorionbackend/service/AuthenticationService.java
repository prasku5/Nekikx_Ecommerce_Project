package com.aurorion.aurorionbackend.service;
import com.aurorion.aurorionbackend.config.UserMessageResponse;
import com.aurorion.aurorionbackend.exceptions.AuthenticationFailException;
import com.aurorion.aurorionbackend.model.AuthenticationTokenClass;
import com.aurorion.aurorionbackend.model.User;
import com.aurorion.aurorionbackend.repository.TokenRepository;
import com.aurorion.aurorionbackend.utils.HelperClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    TokenRepository repository;

    public void saveConfirmationToken(AuthenticationTokenClass authenticationToken) {
        repository.save(authenticationToken);
    }

    public AuthenticationTokenClass getToken(User user) {
        return repository.findTokenByUser(user);
    }

    public User getUser(String token) {
        AuthenticationTokenClass authenticationToken = repository.findTokenByToken(token);
        if (HelperClass.notNull(authenticationToken)) {
            if (HelperClass.notNull(authenticationToken.getUser())) {
                return authenticationToken.getUser();
            }
        }
        return null;
    }

    public void authenticate(String token) throws AuthenticationFailException {
        if (!HelperClass.notNull(token)) {
            throw new AuthenticationFailException(UserMessageResponse.AUTH_TOEKN_NOT_PRESENT);
        }
        if (!HelperClass.notNull(getUser(token))) {
            throw new AuthenticationFailException(UserMessageResponse.AUTH_TOEKN_NOT_VALID);
        }
    }
}
