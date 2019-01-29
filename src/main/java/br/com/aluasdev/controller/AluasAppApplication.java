package br.com.aluasdev.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@SpringBootApplication(scanBasePackages = {"br.com.aluasdev.controller"})
@SpringBootApplication
public class AluasAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AluasAppApplication.class, args);
	}

}

