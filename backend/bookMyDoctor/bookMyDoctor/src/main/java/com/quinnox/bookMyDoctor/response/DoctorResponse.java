package com.quinnox.bookMyDoctor.response;

import org.springframework.web.bind.annotation.ResponseBody;

import lombok.Data;

@Data

public class DoctorResponse {
	
	private String message;
	private Object data;
	

}
