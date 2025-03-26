package com.bookjuk.config;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bookjuk.user.dto.NaverApiDto;

@Configuration
public class AppConfig {

  @Value("${naver.client-id}")
  private String naverClientId;
  
  @Value("${naver.redirect-uri}")
  private String naverRedirectUri;
  
  @Value("${naver.client-secret}")
  private String naverClientSecret;
  
  @Bean
  NaverApiDto naverApiDto() {
    return new NaverApiDto(naverClientId, naverRedirectUri, naverClientSecret);
  }
  
  @Bean
  ModelMapper modelMapper() {
    return new ModelMapper();
  }

}
