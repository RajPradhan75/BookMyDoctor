package com.quinnox.bookMyDoctor.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name = "appointment")
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "appointmentId")
	private Integer appointmentId;
	
	@Column(name = "doctorName")
	private String doctorName;
	
	@Column(name = "doctorId")
	private Integer doctorId;
	
	@Column(name = "doctorSpeciality")
	private String doctorSpeciality;
	
	@Column(name = "patientId")
	private Integer patientId;
	
	@Column(name = "patientName")
	private String patientName;
	
	@Column(name ="date")
	private String date;
	
	@Column(name ="time")
	private String time;
	
	@Column(name = "description")
	private String description;
	

}
