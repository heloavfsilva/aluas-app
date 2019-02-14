package br.com.aluasdev.controller;

import br.com.aluasdev.dao.AtividadeRepository;
import br.com.aluasdev.model.Atividade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/rest")
public class AtividadeController {
  @Autowired
  AtividadeRepository repo;

  @RequestMapping (method = RequestMethod.GET)
  public List<Atividade> findAll(){
    ArrayList<Atividade> retorno = new ArrayList<Atividade>();

    return retorno;
  }

  @RequestMapping( method = RequestMethod.POST, value = "/add")
  public void addAtividade(@RequestBody Atividade atividade) {
    repo.add(atividade);
    System.out.println(atividade.getTitulo());
  }



}
