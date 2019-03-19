package br.com.aluasdev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages = {"br.com.aluasdev.controller"})
public class AluasAppApplication {

  public static void main(String[] args) {

    SpringApplication.run(AluasAppApplication.class, args);

  }

}

