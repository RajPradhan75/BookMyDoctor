package com.quinnox.bookMyDoctor.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoctor.entity.Appointment;

@Repository
public interface AppointmentDAOJPA extends JpaRepository<Appointment, Integer>{
    
	@Query("select d from Doctor d where d.doctorEmail=?1 and d.doctorPassword=?2")
	public Appointment findByEmailAndPassword(String email,String Password);
	
	@Query("select p from Patient p where p.patientEmail=?1 and p.patientPassword=?2")
	public Appointment findPatientByEmailAndPassword(String email,String Password);
	
	
//	public Appointment findById1(Integer doctorId);
	@Query("select a from Appointment a where a.doctorId=?1")
	public List<Appointment> findById1(Integer doctorId);
	
	@Query("select a from Appointment a where a.patientId=?1")
	public List<Appointment> findById2(Integer patientId);

	
	

}
