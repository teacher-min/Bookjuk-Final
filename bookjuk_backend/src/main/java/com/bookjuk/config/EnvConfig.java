package com.bookjuk.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EnvConfig {

  @Value("${naver.client.id}")
  private static String naverClientId;
  
  @Value("${naver.redirect.uri}")
  private static String naverRedirectUri;
  
  @Value("${naver.client.secret}")
  private static String naverClientSecret;
  
  @Value("${spring.servlet.multipart.location}")
  private static String uploadDir;
  
  @Value("${imgbb.app.key}")
  private static String apiKey;

  @Value("${portone.secret.api}")
  private static String portoneSecretApi;

  @Value("${portone.secret.webhook}")
  private static String portoneSecretWebhook;

  public static String getNaverClientId() {
    return naverClientId;
  }

  public static String getNaverRedirectUri() {
    return naverRedirectUri;
  }

  public static String getNaverClientSecret() {
    return naverClientSecret;
  }

  public static String getUploadDir() {
    return uploadDir;
  }

  public static String getApiKey() {
    return apiKey;
  }

  public static String getPortoneSecretApi() {
    return portoneSecretApi;
  }

  public static String getPortoneSecretWebhook() {
    return portoneSecretWebhook;
  }
  
}
