package br.com.aluasdev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication(scanBasePackages = {"br.com.aluasdev.controller"})
public class AluasAppApplication extends SpringBootServletInitializer {
  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(AluasAppApplication.class);
  }

	public static void main(String[] args) {
	  SpringApplication.run(AluasAppApplication.class, args);
	}

}

