package com.demoapp.demo.controller;

import com.demoapp.demo.model.User;
import com.demoapp.demo.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AuthController.class)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void deveRetornarMensagemEmailJaCadastrado() throws Exception {

        User user = new User();
        user.setEmail("teste@email.com");

        when(userService.isEmailValid("teste@email.com"))
                .thenReturn(true);

        when(userService.isPasswordValid("Senha@123"))
                .thenReturn(true);

        when(userService.findByEmail("teste@email.com"))
                .thenReturn(user);

        mockMvc.perform(post("/auth/signup")
                .contentType(APPLICATION_JSON)
                .content("""
                    {
                      "email":"teste@email.com",
                      "password":"Senha@123"
                    }
                    """))
                .andExpect(status().isConflict())

                // TESTE DO BUG
                .andExpect(jsonPath("$.message")
                        .value("E-mail já cadastrado"));
    }
}