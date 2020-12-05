package com.quinnox.bookMyDoctor.controller;

import java.util.List;


import javax.persistence.EntityManager;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.bookMyDoctor.dao.AppointmentDAOJPA;
import com.quinnox.bookMyDoctor.dao.DoctorDAOJPA;
import com.quinnox.bookMyDoctor.dao.PatientDAOJPA;

import com.quinnox.bookMyDoctor.entity.Appointment;
import com.quinnox.bookMyDoctor.entity.Patient;
import com.quinnox.bookMyDoctor.response.AppointmentResponse;
import com.quinnox.bookMyDoctor.response.DoctorResponse;
import com.quinnox.bookMyDoctor.service.AppointmentService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class AppointmentController {
  
     @Autowired
     AppointmentDAOJPA appointmentdao;
     
     @Autowired
     AppointmentService appointmentservice;
     
     @Autowired
     EntityManager manager;
     
 	
 	@PostMapping("/appointment")
 	public AppointmentResponse createAppointment(@RequestBody Appointment appointment) {
 		AppointmentResponse response = new AppointmentResponse();
 		response.setMessage("Appointment Added");
 		appointmentservice.save(appointment);
 		return response;
 	}
 	
 	@GetMapping("/appointments")
 	public AppointmentResponse findAllAppointments(){
 		AppointmentResponse response = new AppointmentResponse();
 		response.setMessage("Retrieved Appointment details successfully");
 		response.setData(appointmentservice.findAll());
 		return response;
 	}
 	
 	

 	
 	
 	@PostMapping("getdoctorid")
 	public AppointmentResponse retriveById(@RequestBody Appointment appointment) {
 		AppointmentResponse response = new AppointmentResponse();
 		response.setMessage("Doctor Id Retrived Successfully");
 	    List<Appointment> list = appointmentservice.findById1(appointment.getDoctorId());
 		if (!list.isEmpty()) {
			response.setMessage("Doc_id Retrieved Successfully ");
			response.setData(list);
		} else {
			response.setMessage(null);
			response.setData(null);
		}
 		return response;
 	}
 	
 	
 	
	@PostMapping("getpatientid")
 	public AppointmentResponse retriveById1(@RequestBody Appointment appointment) {
 		AppointmentResponse response = new AppointmentResponse();
 		response.setMessage("Patient Id Retrived Successfully");
 	    List<Appointment> list = appointmentservice.findById2(appointment.getPatientId());
 		if (!list.isEmpty()) {
			response.setMessage("Patient  Retrieved Successfully ");
			response.setData(list);
		} else {
			response.setMessage(null);
			response.setData(null);
		}
 		return response;
 	}
 	
	

	
 	
 	@PutMapping("/appointment")
 	public AppointmentResponse  updateAppointment(@RequestBody Appointment appointment) {
 		AppointmentResponse response = new AppointmentResponse();
 		response.setMessage("Appointment data updated");
 	    Appointment appointmentreg = manager.find(Appointment.class, appointment.getAppointmentId());
 	    BeanUtils.copyProperties(appointment, response);
 		appointmentservice.save(appointmentreg);	
 		return response;	
 	}
 	
 	@DeleteMapping("/deleteappointment/{appointmentId}")
 	public AppointmentResponse deleteAppointment(@PathVariable Integer appointmentId) {
 		AppointmentResponse response =  new AppointmentResponse();
 		response.setMessage("Appointment deleted");
 		appointmentservice.deleteById(appointmentId);
 		return response;
 	}
 	
	@DeleteMapping("/appointment/{appointmentId}")
	public AppointmentResponse deleteDoctor(@PathVariable Integer appointmentId) {
		AppointmentResponse response =  new AppointmentResponse();
		response.setMessage("Appointment data deleted");
		appointmentservice.deleteById(appointmentId);
		return response;
	}
 	
 	
}
