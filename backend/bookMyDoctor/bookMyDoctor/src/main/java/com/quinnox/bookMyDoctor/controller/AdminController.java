package com.quinnox.bookMyDoctor.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.bookMyDoctor.dao.AdminDAO;
import com.quinnox.bookMyDoctor.dao.AppointmentDAO;
import com.quinnox.bookMyDoctor.dao.DoctorDAO;
import com.quinnox.bookMyDoctor.dao.DoctorDAOJPA;
import com.quinnox.bookMyDoctor.dao.PatientDAOJPA;
import com.quinnox.bookMyDoctor.dao.patientDAO;
import com.quinnox.bookMyDoctor.entity.Admin;
import com.quinnox.bookMyDoctor.entity.Appointment;
import com.quinnox.bookMyDoctor.entity.Doctor;
import com.quinnox.bookMyDoctor.entity.Patient;
import com.quinnox.bookMyDoctor.response.DoctorResponse;
import com.quinnox.bookMyDoctor.response.PatientResponse;
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")

@RestController
public class AdminController {
	
	@Autowired
	DoctorDAO doctordao;
	@Autowired
	patientDAO patientdao;
	@Autowired
	AppointmentDAO appointmentdao;
	@Autowired
	DoctorDAOJPA jpadao;
	@Autowired
	AdminDAO admindao;
	
	@Autowired
	PatientDAOJPA patientjpadao;
	
	
	@PostMapping("/doctor")
	public String addDoctor(@RequestBody Doctor doctor) {
		DoctorResponse response = new DoctorResponse();
		response.setMessage("New Doctor Added");
		doctordao.addDoctor(doctor);
		return "doctor added succesfully";	
	}
	
	@GetMapping("/doctors")
	public DoctorResponse findAllDoctors(){
		DoctorResponse response = new DoctorResponse();
		response.setMessage("Doctor data retrieved");
		response.setData(doctordao.findAllDoctors()) ;
		return response;
	}
	
	@GetMapping("doctor/{doctorId}")
	public DoctorResponse getDoctorById(@PathVariable int doctorId)
			throws ResourceNotFoundException {
		  DoctorResponse response = new DoctorResponse();
		  response.setMessage("Selected Doctor data retrived");
		  response.setData(doctordao.getDetailsOfUpdatingDoctor(doctorId)) ;	
		  return response;
	}
		
	
	
	@PutMapping("/doctor")
	public DoctorResponse updateDoctor(@RequestBody Doctor doctor) {
		DoctorResponse response = new DoctorResponse();
		response.setMessage("Doctor Data Updated");
		doctordao.updateDoctor(doctor);
		return response;
	}
	
	@DeleteMapping("/doctor/{doctorId}")
	public DoctorResponse deleteDoctor(@PathVariable int doctorId) {
		DoctorResponse response =  new DoctorResponse();
		response.setMessage("Doctor data deleted");
		doctordao.deleteDoctor(doctorId);
		return response;
	}
	

	
	@PutMapping("/patient")
	public DoctorResponse updatePatient(@RequestBody Patient patient) {
		DoctorResponse response = new DoctorResponse();
		response.setMessage("Patient Data Updated Successfully");
		patientdao.updatePatient(patient);
		return response;
	}
	
	@DeleteMapping("/patient/{patientId}")
	public DoctorResponse deletePatient(@PathVariable int patientId) {
		DoctorResponse response = new DoctorResponse();
		response.setMessage("patient data deleted");
		patientdao.deletePatient(patientId);
		return response;
	}

	

	@PutMapping("/Doctorlogin")
	public DoctorResponse login(@RequestBody Doctor doctor1) {
		DoctorResponse response = new DoctorResponse();
		Doctor doctor = jpadao.findByDoctorEmailAndName(doctor1.getDoctorEmail(), doctor1.getDoctorPassword());
		    if(doctor != null) {
		    	response.setMessage("Doctor logged in successfully");
		    	response.setData(jpadao.findByDoctorEmailAndName(doctor1.getDoctorEmail(), doctor1.getDoctorPassword()));
		    
		    	return response;
		    }else {
		    	return null;
		    }
		}
	
	
	@PutMapping("/Patientlogin")
	public PatientResponse login(@RequestBody Patient patient1) {
		PatientResponse response = new PatientResponse();
		Patient patient =  patientjpadao.findByPatientEmailAndName(patient1.getPatientEmail(), patient1.getPatientPassword());
		    if(patient != null) {
		    	response.setMessage("Patient logged in successfully");
		    	response.setData(patientjpadao.findByPatientEmailAndName(patient1.getPatientEmail(), patient1.getPatientPassword()));    	
		    	return response;
		    }else {
		    	return null;
		    }
		}
	
	
	    
		@PutMapping("/Adminlogin")
		public boolean login(@RequestBody Admin admin1) {
			Admin admin = admindao.findByAdminEmailAndName(admin1.getAdminEmail(), admin1.getAdminPassword());
			if(admin != null) {
				return true;
			}else {
				return false;
			}
		}
		
	}
	

