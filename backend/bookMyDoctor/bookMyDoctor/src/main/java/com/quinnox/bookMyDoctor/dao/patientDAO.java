package com.quinnox.bookMyDoctor.dao;

import java.util.List;


import com.quinnox.bookMyDoctor.entity.Patient;

public interface patientDAO {
	
	public boolean registerNewPatient(Patient patient);

	public boolean login(String email, String password);

	public boolean registerPatient(Patient patient);

	public List<Patient> findAllPatients();

	public boolean updatePatient(Patient patient);

	public boolean deletePatient(int patientId);

}
