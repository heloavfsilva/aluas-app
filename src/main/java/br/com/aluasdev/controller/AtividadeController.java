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
    Atividade a = new Atividade();
    a.setTitulo("Hello A");
    ArrayList<Atividade> retorno = new ArrayList<Atividade>();
    retorno.add(a);

    return retorno;
  }
}
