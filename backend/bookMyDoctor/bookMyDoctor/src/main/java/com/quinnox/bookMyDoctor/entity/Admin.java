package com.quinnox.bookMyDoctor.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.RequestBody;

import lombok.Data;


@Entity
@Data
@Table(name = "admin")
public class Admin {
   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "adminId")
	private Integer adminId;
	
	@Column(name = "adminName")
	private String adminName;
	
	
	@Column(name = "adminEmail")
	private String adminEmail;
	
	@Column(name = "adminPassword")
	private String adminPassword;
}