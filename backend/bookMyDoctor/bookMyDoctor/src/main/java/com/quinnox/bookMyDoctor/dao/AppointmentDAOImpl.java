package com.quinnox.bookMyDoctor.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoctor.entity.Appointment;
import com.quinnox.bookMyDoctor.entity.Doctor;

@Repository
public class AppointmentDAOImpl implements AppointmentDAO {

	@Autowired
	EntityManager manager;

	@Override
	@Transactional
	public boolean createAppointment(Appointment appointment) {
		manager.persist(appointment);
		return true;
	}

	@Override
	public List<Appointment> findAllAppointments() {
		TypedQuery<Appointment> query = manager.createQuery("From Appointment", Appointment.class);
		return query.getResultList();
	}

//	@Override
//	@Transactional
//	public boolean updateAppointment(Appointment appointment) {
//		Appointment appointment1 = manager.find(Appointment.class, appointment.getAppointmentId());
//		BeanUtils.copyProperties(appointment, appointment1);
//		return true;
//	}

	@Override
	@Transactional
	public boolean deleteAppointment(int AppointmentId) {
		Appointment appointment = manager.find(Appointment.class, AppointmentId);
		manager.remove(appointment);
		return true;
	}

	@Override
	public boolean updateAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		return false;
	}

}
