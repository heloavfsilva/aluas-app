package br.com.aluasdev.controller;

import br.com.aluasdev.dao.AtividadeDAO;
import br.com.aluasdev.model.Atividade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


@RestController
//RequestMapping("/rest")

public class AtividadeController {
  @Autowired
  private AtividadeDAO atividadeDAO;

  //@RequestMapping (method = RequestMethod.GET, value = "/atividade")
  @GetMapping("/rest")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Atividade> listAll (){
    List<Atividade> list = new ArrayList<>();
    Iterable<Atividade> atividades = atividadeDAO.findAll();

    atividades.forEach(list::add);
    return list;
  }

//  public List<Atividade> findAll(){


  @RequestMapping( method = RequestMethod.POST, value = "/add")
  public void addAtividade(@RequestBody Atividade atividade) {
      atividadeDAO.save(atividade);
      System.out.println("Saved");

    }





}
