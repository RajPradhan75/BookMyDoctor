package com.quinnox.bookMyDoctor.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoctor.entity.Admin;

@Repository
public interface AdminDAO extends JpaRepository<Admin, Integer>{
  
	@Query("select A from Admin A where A.adminEmail=?1 and A.adminPassword=?2" )
	public Admin findByAdminEmailAndName( String adminEmail, String adminPassword);
}
