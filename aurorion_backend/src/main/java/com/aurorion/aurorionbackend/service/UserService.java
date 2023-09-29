package com.aurorion.aurorionbackend.service;
import com.aurorion.aurorionbackend.config.UserMessageResponse;
import com.aurorion.aurorionbackend.components.*;
import com.aurorion.aurorionbackend.enums.ResponseStatus;
import com.aurorion.aurorionbackend.enums.Role;
import com.aurorion.aurorionbackend.exceptions.AuthenticationFailException;
import com.aurorion.aurorionbackend.exceptions.CustomException;
import com.aurorion.aurorionbackend.model.AuthenticationTokenClass;
import com.aurorion.aurorionbackend.model.User;
import com.aurorion.aurorionbackend.repository.UserRepository;
import com.aurorion.aurorionbackend.utils.HelperClass;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import static com.aurorion.aurorionbackend.config.UserMessageResponse.USER_CREATED;


@Service
public class UserService {

    private static final boolean True = false;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthenticationService authenticationService;

    Logger logger = LoggerFactory.getLogger(UserService.class);


    public ResponsetoUser signUp(UserSignUp usersignup)  throws CustomException {
        // Check to see if the current email address has already been registered.
        if (HelperClass.notNull(userRepository.findByEmail(usersignup.getEmail()))) {
            // If the email address has been registered then throw an exception.
            throw new CustomException("User already exists");
        }
        // first encrypt the password
        String encryptedPassword = usersignup.getPassword();
        try {
            encryptedPassword = hashPassword(usersignup.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            logger.error("hashing password failed {}", e.getMessage());
        }


        User user = new User(usersignup.getFirstName(), usersignup.getLastName(), usersignup.getEmail(), Role.user, encryptedPassword );

        User createdUser;
        try {
            // save the User
            createdUser = userRepository.save(user);
            // generate token for user
            final AuthenticationTokenClass AuthenticationTokenClass = new AuthenticationTokenClass(createdUser);
            // save token in database
            authenticationService.saveConfirmationToken(AuthenticationTokenClass);
            // success in creating
            return new ResponsetoUser(ResponseStatus.success.toString(), USER_CREATED);
        } catch (Exception e) {
            // handle signup error
            throw new CustomException(e.getMessage());
        }
    }

    public UserSignInResponse signIn(UserSignIn usersignin) throws CustomException {
        // first find User by email
        User user = userRepository.findByEmail(usersignin.getEmail());
        if(!HelperClass.notNull(user)){
            throw  new AuthenticationFailException("user not present");
        }
        try {
            // check if password is right
            if (!user.getPassword().equals(hashPassword(usersignin.getPassword()))){
                // passowrd doesnot match
                throw  new AuthenticationFailException(UserMessageResponse.WRONG_PASSWORD);
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            logger.error("hashing password failed {}", e.getMessage());
            throw new CustomException(e.getMessage());
        }

        AuthenticationTokenClass token = authenticationService.getToken(user);

        if(!HelperClass.notNull(token)) {
            // token not present
            throw new CustomException("token not present");
        }

        return new UserSignInResponse (True, "success", token.getToken());
    }

    String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter
                .printHexBinary(digest).toUpperCase();
        return myHash;
    }

}