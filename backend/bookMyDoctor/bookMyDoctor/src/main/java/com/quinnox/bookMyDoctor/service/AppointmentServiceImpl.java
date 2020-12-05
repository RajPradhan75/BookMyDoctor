package com.quinnox.bookMyDoctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.bookMyDoctor.dao.AppointmentDAOJPA;
import com.quinnox.bookMyDoctor.entity.Appointment;

@Service
public class AppointmentServiceImpl implements AppointmentService{
    
	@Autowired
	AppointmentDAOJPA appointmentdao;
	
	@Override
	public Appointment save(Appointment appointment) {
		return appointmentdao.save(appointment);
	}

	@Override
	public List<Appointment> findAll() {
		return appointmentdao.findAll();
	}

	@Override
	public boolean deleteById(Integer appointmentId) {
		appointmentdao.deleteById(appointmentId);
		return true;
	}

	@Override
	public Appointment findByEmailAndPassword(String doctorEmail, String doctorPassword) {
		return appointmentdao.findByEmailAndPassword(doctorEmail, doctorPassword);
	}

	@Override
	public List<Appointment> findById1(Integer doctorId) {
		return appointmentdao.findById1(doctorId);
	}

	@Override
	public Appointment findPatientByEmailAndPassword(String patientEmail, String patientPassword) {
		return appointmentdao.findPatientByEmailAndPassword(patientEmail, patientPassword);
	}

	@Override
	public List<Appointment> findById2(Integer patientId) {
		return appointmentdao.findById2(patientId);
	}



}
