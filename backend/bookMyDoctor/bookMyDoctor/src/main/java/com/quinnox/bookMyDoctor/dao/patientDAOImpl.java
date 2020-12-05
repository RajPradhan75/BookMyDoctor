package com.quinnox.bookMyDoctor.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoctor.entity.Doctor;
import com.quinnox.bookMyDoctor.entity.Patient;

@Repository
public class patientDAOImpl implements patientDAO {

	@Autowired
	EntityManager manager;

	@Override
	@Transactional
	public boolean registerNewPatient(Patient patient) {
		Patient patient2 = new Patient();
		BeanUtils.copyProperties(patient, patient2);
		manager.persist(patient2);
		return true;
	}

	@Override
	public boolean login(String email, String password) {
		TypedQuery<Patient> query = manager.createQuery("select P from Patient P where P.email=?1 and P.password=?2",
				Patient.class);
		query.setParameter(1, email);
		query.setParameter(2, password);
		try {
			Patient patient = query.getSingleResult();
			return true;
		} catch (Exception e) {
			return false;
		} finally {
			manager.close();
		}
	}

	@Override
	@Transactional
	public boolean registerPatient(Patient patient) {
		manager.persist(patient);
		return true;
	}

	@Override
	public List<Patient> findAllPatients() {
		TypedQuery<Patient> query = manager.createQuery("From Patient", Patient.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public boolean updatePatient(Patient patient) {
		Patient patient1 = manager.find(Patient.class, patient.getPatientId());
		BeanUtils.copyProperties(patient, patient1);
		return true;
	}

	@Override
	@Transactional
	public boolean deletePatient(int patientId) {
		Patient patient = manager.find(Patient.class, patientId);
		manager.remove(patient);
		return true;
	}

}
