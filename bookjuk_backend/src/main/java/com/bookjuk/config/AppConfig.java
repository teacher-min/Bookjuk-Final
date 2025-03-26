package com.bookjuk.config;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bookjuk.user.dto.NaverApiDto;

@Configuration
public class AppConfig {

  private static String naverClientId;
  private static String naverRedirectUri;
  private static String naverClientSecret;
  public static String apiKey;
  
  @Value("${naver.client.id}")
  public static void setNaverClientId(String naverClientId) {
    AppConfig.naverClientId = naverClientId;
  }

  @Value("${naver.redirect.uri}")
  public static void setNaverRedirectUri(String naverRedirectUri) {
    AppConfig.naverRedirectUri = naverRedirectUri;
  }

  @Value("${naver.client.secret}")
  public static void setNaverClientSecret(String naverClientSecret) {
    AppConfig.naverClientSecret = naverClientSecret;
  }
  
  @Value("${imgbb.app.key}")
  public static void setApiKey(String apiKey) {
    AppConfig.apiKey = apiKey;
  }

  @Bean
  NaverApiDto naverApiDto() {
    return new NaverApiDto(naverClientId, naverRedirectUri, naverClientSecret);
  }
  
  @Bean
  ModelMapper modelMapper() {
    return new ModelMapper();
  }

}
