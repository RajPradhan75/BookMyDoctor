package com.quinnox.bookMyDoctor.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoctor.entity.Doctor;

@Repository
public interface DoctorDAOJPA extends JpaRepository<Doctor, Integer> {
	
	@Query("select D from Doctor D where D.doctorEmail=?1 and D.doctorPassword=?2" )
	public Doctor findByDoctorEmailAndName( String doctorEmail, String doctorPassword);
}
