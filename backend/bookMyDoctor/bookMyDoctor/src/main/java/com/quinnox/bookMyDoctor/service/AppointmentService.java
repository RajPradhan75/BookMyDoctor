package com.quinnox.bookMyDoctor.service;

import java.util.List;

import com.quinnox.bookMyDoctor.entity.Appointment;


public interface AppointmentService {
   
	public Appointment save(Appointment appointment);
	
	public List<Appointment> findAll();
	
	public boolean deleteById(Integer appointmentId);
	
	public Appointment findByEmailAndPassword(String doctorEmail,String doctorPassword);
	
	public Appointment findPatientByEmailAndPassword(String patientemail,String patientPassword);
	
	public  List<Appointment>  findById1(Integer doctorId);
	
	public  List<Appointment> findById2(Integer patientId);
	
	
}
