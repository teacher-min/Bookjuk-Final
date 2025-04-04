package com.bookjuk.upload.sevice;

import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bookjuk.api.imgbb.ImgbbUploadClient;
import com.bookjuk.api.imgbb.parameter.UploadParameters;
import com.bookjuk.api.imgbb.response.OptionalResponse;
import com.bookjuk.api.imgbb.response.ResponseModelData;
import com.bookjuk.config.EnvConfig;

@Component
public class UploadSevice {

  /**
   * 이미지 업로드
   * 
   * @param  multipartRequest name : base64Image, base64 형식의 이미지를 받아서 서버에 업로드
   * 
   * @return                  이미지 URL
   */
  public synchronized String imgUpload(MultipartHttpServletRequest multipartRequest) {
    String imgUrl      = "";
    String base64Image = multipartRequest.getParameter("base64Image");

    if (base64Image == null || base64Image.trim().isEmpty()) {
      return imgUrl;
    }

    // Base64 헤더 제거
    base64Image = base64Image.replace("data:image/png;base64,", "");

    try {
      // Image Server Upload //
      UploadParameters paremeters = new UploadParameters.Builder()
          .apiKey(EnvConfig.getApiKey())
          .imageName(UUID.randomUUID().toString())
          .imageBase64(base64Image).build();

      OptionalResponse response = ImgbbUploadClient.upload(paremeters);
      if (response.get().isUploadedSuccess()) {
        ResponseModelData data = response.get().getResponseData();
        imgUrl = data.getImageUrl();
        //String deleteUrl = data.getDeleteUrl(); // url 로 접속 후 삭제를 직접 진행 해야 함
      }
      else {
        System.out.println(response.get().getRequestStatus());
      }
      return imgUrl;
      // Image Server Upload //
    }
    catch (Exception e) {
      e.printStackTrace();
      return imgUrl;
    }
  }

}
