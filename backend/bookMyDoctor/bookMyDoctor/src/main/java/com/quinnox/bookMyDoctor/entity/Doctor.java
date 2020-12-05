package com.quinnox.bookMyDoctor.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "doctor")
public class Doctor {
   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "doctorId")
	private Integer doctorId;
	
	@Column(name = "doctorName")
	private String doctorName;
	
	@Column(name = "doctorSpeciality")
	private String doctorSpeciality;
	
	@Column(name = "doctorQualification")
	private String doctorQualification;
	
	@Column(name = "doctorProfile")
	private String doctorProfile;
	
	@Column(name = "doctorEmail")
	private String doctorEmail;
	
	@Column(name = "doctorPassword")
	private String doctorPassword;
}
