package br.com.aluasdev.controller;

import br.com.aluasdev.dao.AtividadeDAO;
import br.com.aluasdev.model.Atividade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@Controller
@RequestMapping("/rest")
public class AtividadeController {
  @Autowired
  private AtividadeDAO atividadeDAO;

  @RequestMapping (method = RequestMethod.GET)
  public List<Atividade> findAll(){
    ArrayList<Atividade> retorno = new ArrayList<Atividade>();

    return retorno;
  }

  @RequestMapping( method = RequestMethod.POST, value = "/add")
  public void addAtividade(@RequestBody Atividade atividade) {
      atividadeDAO.save(atividade);
      System.out.println("Saved");

    }
}
