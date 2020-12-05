package com.quinnox.bookMyDoctor.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.bookMyDoctor.entity.Doctor;
import com.quinnox.bookMyDoctor.entity.Patient;

@Repository
public interface PatientDAOJPA extends JpaRepository<Patient, Integer> {
	
	@Query("select P from Patient P where P.patientEmail=?1 and P.patientPassword=?2" )
	public Patient findByPatientEmailAndName( String patientEmail, String patientPassword);

     
}
