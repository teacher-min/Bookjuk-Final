package com.bookjuk.config;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bookjuk.user.dto.NaverApiDto;

@Configuration
public class AppConfig {

  @Value("${NAVER_CLIENT_ID}")
  private String naverClientId;
  
  @Value("${NAVER_CLIENT_SECRET}")
  private String naverRedirectUri;
  
  @Value("${NAVER_CLIENT_SECRET}")
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
