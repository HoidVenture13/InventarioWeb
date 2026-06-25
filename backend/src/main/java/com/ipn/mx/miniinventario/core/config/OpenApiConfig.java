package com.ipn.mx.miniinventario.core.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("Arellano Acosta Ixchel - API REST")
                .description("Sistema de Gestion de Inventario de Categorias y Productos. Proyecto academico IPN.")
                .version("1.0")
                .contact(new Contact()
                    .name("Arellano Acosta Ixchel"))
                .license(new License()
                    .name("IPN - Proyecto Academico")));
    }
}
