package br.com.aluasdev.controller;


import br.com.aluasdev.dao.AtividadeRepository;
import br.com.aluasdev.dao.ControleRepository;
import br.com.aluasdev.dao.UserRepository;
import br.com.aluasdev.model.Acesso;
import br.com.aluasdev.model.Atividade;
import br.com.aluasdev.model.Controle;
import br.com.aluasdev.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.ldap.Control;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class ControleController {
  @Autowired
  private ControleRepository controleRepository;
  @Autowired
  private AtividadeRepository atividadeRepo;

  public void mapUserAtividade(int atividade, int usuario) {
    Controle ctrl = new Controle();

    ctrl.setAtividade(atividade);
    ctrl.setUsuario(usuario);
    ctrl.setStatus("New");
    ctrl.setData(LocalDateTime.now().toString());

    controleRepository.save(ctrl);
    System.out.println("New");

  }


  public void updateControle(int id, int usuario) {
    Controle ctrl = new Controle();
    ctrl.setAtividade(id);
    ctrl.setUsuario(usuario);
    ctrl.setStatus("Updated");
    ctrl.setData(LocalDateTime.now().toString());

    controleRepository.save(ctrl);
    System.out.println("Ongoing");
  }

  public void completeControle(int id, int usuario) {
    Controle ctrl = new Controle();
    ctrl.setAtividade(id);
    ctrl.setUsuario(usuario);
    ctrl.setStatus("Completed");
    ctrl.setData(LocalDateTime.now().toString());

    controleRepository.save(ctrl);
    System.out.println("Completed");
  }


  public void deleteControle(int id, int usuario) {
//    Atividade data = atividadeRepo.findById(id);
    Controle ctrl = new Controle();
    ctrl.setAtividade(id);
    ctrl.setUsuario(usuario);
    ctrl.setStatus("Deleted");
    ctrl.setData(LocalDateTime.now().toString());

    controleRepository.save(ctrl);
    System.out.println("Deleted");
  }


}
