package com.quinnox.bookMyDoctor.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoctor.entity.Doctor;
import com.quinnox.bookMyDoctor.entity.Patient;

@Repository
public class DoctorDAOImpl implements DoctorDAO {
	
	@Autowired
	EntityManager manager;
	
	@Override
	public boolean registerNewDoctor(Doctor doctor) {
		Doctor doctor2 = new Doctor();
		BeanUtils.copyProperties(doctor, doctor2);
		manager.persist(doctor2);
		return true;
	}

	@Override
	public boolean login(String email, String password) {
		TypedQuery<Doctor> query = manager.createQuery("select D from Doctor D where D.doctorEmail=?1 and D.doctorPassword=?2",
				Doctor.class);
		query.setParameter(1, email);
		query.setParameter(2, password);
		try {
			Doctor doctor = query.getSingleResult();
			return true;
		} catch (Exception e) {
			return false;
		} finally {
			manager.close();
		}
	}

	@Override
	@Transactional
	public boolean addDoctor(Doctor doctor) {
		manager.persist(doctor);
		return true;
	}

	@Override
	public List<Doctor> findAllDoctors() {
		TypedQuery<Doctor> query = manager.createQuery("From Doctor", Doctor.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public boolean updateDoctor(Doctor doctor) {
		Doctor doctor1 = manager.find(Doctor.class, doctor.getDoctorId());
		BeanUtils.copyProperties(doctor, doctor1);
		return true;
	}

	@Override
	@Transactional
	public boolean deleteDoctor(int doctorId) {
		Doctor doctor = manager.find(Doctor.class, doctorId);
		manager.remove(doctor);
		return true;
	}

	@Override
	public ResponseEntity<Doctor> getDetailsOfUpdatingDoctor(int doctorId) {
		Doctor doctor = manager.find(Doctor.class, doctorId);
		return ResponseEntity.ok().body(doctor);
	}
  
}
