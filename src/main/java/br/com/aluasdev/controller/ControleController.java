package br.com.aluasdev.controller;


import br.com.aluasdev.dao.ControleRepository;
import br.com.aluasdev.dao.UserRepository;
import br.com.aluasdev.model.Acesso;
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


  public void mapUserAtividade(int atividade, int usuario) {
    Controle ctrl = new Controle();

      ctrl.setAtividade(atividade);
      ctrl.setUsuario(usuario);
      ctrl.setStatus("Criado");
      ctrl.setData(LocalDateTime.now().toString());

      controleRepository.save(ctrl);
      System.out.println("Saved");

  }


  public void updateControle(int id, int usuario) {
    Controle data = controleRepository.findByAtividade(id);
    data.setStatus("Editado");
    data.setData(LocalDateTime.now().toString());

    controleRepository.save(data);
    System.out.println("Editado");
  }


  public void deleteControle(int id) {
    Controle data = controleRepository.findByAtividade(id);
    data.setStatus("Deletado");
    data.setData(LocalDateTime.now().toString());

    controleRepository.save(data);
    System.out.println("Deletado");
  }


}
