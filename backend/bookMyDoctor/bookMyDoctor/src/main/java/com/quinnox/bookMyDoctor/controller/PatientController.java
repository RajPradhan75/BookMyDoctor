package com.quinnox.bookMyDoctor.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.quinnox.bookMyDoctor.dao.AppointmentDAO;
import com.quinnox.bookMyDoctor.dao.PatientDAOJPA;
import com.quinnox.bookMyDoctor.dao.patientDAO;
import com.quinnox.bookMyDoctor.entity.Admin;
import com.quinnox.bookMyDoctor.entity.Appointment;
import com.quinnox.bookMyDoctor.entity.Doctor;
import com.quinnox.bookMyDoctor.entity.Patient;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class PatientController {
     
	@Autowired
	patientDAO patientdao;
	
	@Autowired
	PatientDAOJPA patientjpadao;
	
	@Autowired
	AppointmentDAO appointmentdao;
	
	
	
	@PostMapping("/patient")
	public String addPatient(@RequestBody Patient patient) {
		patientdao.registerPatient(patient);
		return "Registration succesfully done";	
	}
	
	@GetMapping("/patients")
	public List<Patient> findAllPatients(){
		return patientdao.findAllPatients();
	}
	
	

	
}
