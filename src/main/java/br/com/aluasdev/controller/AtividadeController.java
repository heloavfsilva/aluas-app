package br.com.aluasdev.controller;

import br.com.aluasdev.model.Atividade;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping ("rest/atividade")

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
