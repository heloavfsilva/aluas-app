package br.com.aluasdev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@SpringBootApplication(scanBasePackages = {"br.com.aluasdev.controller"})
public class AluasAppApplication {

	public static void main(String[] args) {

	  SpringApplication.run(AluasAppApplication.class, args);
	}

}

