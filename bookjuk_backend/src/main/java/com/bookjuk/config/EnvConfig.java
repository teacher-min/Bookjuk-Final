package com.bookjuk.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EnvConfig {

  private static String naverClientId;
  private static String naverRedirectUri;
  private static String naverClientSecret;
  private static String uploadDir;
  private static String apiKey;
  private static String portoneSecretApi;
  private static String portoneSecretWebhook;
  
  @Value("${naver.client.id}")
  public static void setNaverClientId(String naverClientId) {
    EnvConfig.naverClientId = naverClientId;
  }
  
  @Value("${naver.redirect.uri}")
  public static void setNaverRedirectUri(String naverRedirectUri) {
    EnvConfig.naverRedirectUri = naverRedirectUri;
  }
  
  @Value("${naver.client.secret}")
  public static void setNaverClientSecret(String naverClientSecret) {
    EnvConfig.naverClientSecret = naverClientSecret;
  }

  @Value("${spring.servlet.multipart.location}")
  public static void setUploadDir(String uploadDir) {
    EnvConfig.uploadDir = uploadDir;
  }

  @Value("${imgbb.app.key}")
  public static void setApiKey(String apiKey) {
    EnvConfig.apiKey = apiKey;
  }

  @Value("${portone.secret.api}")
  public static void setPortoneSecretApi(String portoneSecretApi) {
    EnvConfig.portoneSecretApi = portoneSecretApi;
  }

  @Value("${portone.secret.webhook}")
  public static void setPortoneSecretWebhook(String portoneSecretWebhook) {
    EnvConfig.portoneSecretWebhook = portoneSecretWebhook;
  }

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
