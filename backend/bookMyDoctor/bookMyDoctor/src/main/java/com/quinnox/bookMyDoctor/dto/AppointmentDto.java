package com.quinnox.bookMyDoctor.dto;

import javax.persistence.Column;

import lombok.Data;

@Data
public class AppointmentDto {
   
	
    private Integer appointmentId;
	

	private String doctorName;

	private Integer doctorId;
	
	private String doctorSpeciality;
	
	private String patientId;
	
	private String patientName;
	
	private String date;
	
	private String time;
	
	private String description;
}
