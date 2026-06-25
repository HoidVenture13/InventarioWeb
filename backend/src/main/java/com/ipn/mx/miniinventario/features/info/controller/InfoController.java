package com.ipn.mx.miniinventario.features.info.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class InfoController {

    @GetMapping("/info")
    public Map<String, String> info() {
        return Map.of(
            "proyecto", "Sistema de Gestion de Inventario",
            "autor", "Arellano Acosta Ixchel",
            "institucion", "IPN",
            "tecnologias", "Spring Boot 4 + Angular 21"
        );
    }
}
