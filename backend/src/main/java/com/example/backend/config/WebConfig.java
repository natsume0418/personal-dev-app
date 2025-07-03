package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // すべてのエンドポイントを対象
                .allowedOrigins("http://localhost:3000") // フロントのURL
                .allowedMethods("*") // GET, POST, PUT などすべて
                .allowedHeaders("*");
    }
}
