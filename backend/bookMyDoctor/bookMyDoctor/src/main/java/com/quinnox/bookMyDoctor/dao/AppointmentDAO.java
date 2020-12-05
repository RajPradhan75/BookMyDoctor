package com.quinnox.bookMyDoctor.dao;

import java.util.List;

import com.quinnox.bookMyDoctor.entity.Appointment;
import com.quinnox.bookMyDoctor.entity.Doctor;

public interface AppointmentDAO {
	

	public boolean createAppointment(Appointment appointment);

	public List<Appointment> findAllAppointments();
	
	public boolean updateAppointment(Appointment appointment);

	public boolean deleteAppointment(int AppointmentId);

}
