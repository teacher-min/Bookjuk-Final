package com.bookjuk.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NaverApiDto {
  private String naverClientId;
  private String naverRedirectUri;
  private String naverClientSecret;
}
