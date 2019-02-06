package br.com.aluasdev.controller;

import br.com.aluasdev.model.Atividade;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/rest")
public class AtividadeController {

  @RequestMapping (method = RequestMethod.GET)
  public List<Atividade> findAll(){
    ArrayList<Atividade> retorno = new ArrayList<Atividade>();

    return retorno;
  }

  @RequestMapping(value = "/addAtividade",method = RequestMethod.POST)
  public void addAtividade (@RequestParam(name = "atividade") Atividade atividade){
    System.out.println(atividade.getTvdd_titulo());

  }
}
