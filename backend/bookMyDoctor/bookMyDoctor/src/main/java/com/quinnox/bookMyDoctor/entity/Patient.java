package com.quinnox.bookMyDoctor.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "patient")
public class Patient {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "patientId")
	private int patientId;
	
	@Column(name = "patient_first_name")
	private String patient_first_name;
	
	@Column(name = "patient_last_name")
	private String patient_last_name;
	
	@Column(name = "patientAge")
	private int patientAge;
	
	@Column(name = "patientGender")
	private String patientGender;
	
	@Column(name = "patientEmail")
	private String patientEmail;
	
	@Column(name = "password")
	private String patientPassword;
	
	
	
	
}
