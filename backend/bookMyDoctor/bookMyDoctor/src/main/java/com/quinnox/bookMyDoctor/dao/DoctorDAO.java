package com.quinnox.bookMyDoctor.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;

import com.quinnox.bookMyDoctor.entity.Doctor;


public interface DoctorDAO {

	public boolean registerNewDoctor(Doctor doctor);
    
	
	public boolean login(String email, String password);

	public boolean addDoctor(Doctor doctor);
	
	public ResponseEntity<Doctor> getDetailsOfUpdatingDoctor(int doctorId);
    
	public List<Doctor> findAllDoctors();

	public boolean updateDoctor(Doctor doctor);

	public boolean deleteDoctor(int doctorId);
	
	
}
