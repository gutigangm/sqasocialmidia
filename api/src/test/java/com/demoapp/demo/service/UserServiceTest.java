package com.demoapp.demo.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {

    private final UserService service = new UserService(null);

    @Test
    void deveAceitarSenhaValida() {
        assertTrue(service.isPasswordValid("Senha@123"));
    }

    @Test
    void deveRejeitarSenhaSemCaractereEspecial() {
        assertFalse(service.isPasswordValid("Senha123"));
    }
}