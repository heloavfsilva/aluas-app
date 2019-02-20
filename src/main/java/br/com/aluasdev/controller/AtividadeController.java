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

  //@RequestMapping( method = RequestMethod.POST, value = "/add")
  //public String addAtividade(@RequestBody Atividade atividade) {

  @RequestMapping( method = RequestMethod.POST, value = "/add")
  public void addAtividade(@RequestBody Atividade atividade) {
  //public @ResponseBody String addAtividade (@RequestParam Atividade atividade) {
      // @ResponseBody means the returned String is the response, not a view name
      // @RequestParam means it is a parameter from the GET or POST request

      Atividade n = new Atividade();
      n.setTitulo(atividade.getTitulo());
      n.setDescricao(atividade.getDescricao());
      atividadeDAO.save(n);
      System.out.println("Saved");

    }
}
