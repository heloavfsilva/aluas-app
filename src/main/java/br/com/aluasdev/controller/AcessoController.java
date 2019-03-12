package br.com.aluasdev.controller;


import br.com.aluasdev.dao.AcessoRepository;
import br.com.aluasdev.dao.UserRepository;
import br.com.aluasdev.model.Acesso;
import br.com.aluasdev.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class AcessoController {
  @Autowired
  private AcessoRepository acessoRepository;

  public void saveAcesso(Acesso acesso){
    acessoRepository.save(acesso);
    System.out.println("Logged");
  }

}
