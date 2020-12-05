package com.quinnox.bookMyDoctor.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
  
	@ExceptionHandler(value = Exception.class)
	public String exceptionHandling(Exception e, Model model) {
		model.addAttribute("msg", e.getMessage());
		return "error";
	}
}
