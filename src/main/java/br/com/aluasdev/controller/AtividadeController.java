package br.com.aluasdev.controller;

import br.com.aluasdev.dao.AtividadeRepository;
import br.com.aluasdev.model.Atividade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController

public class AtividadeController {
  @Autowired
  private AtividadeRepository atividadeRepository;

  @GetMapping("/rest")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Atividade> listAll (){
    List<Atividade> list = new ArrayList<>();
    Iterable<Atividade> atividades = atividadeRepository.findAll();

    atividades.forEach(list::add);
    return list;
  }

  @PutMapping("rest/add/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void updateAtividade(@PathVariable("id") int id, @RequestBody Atividade atividade){
    //Optional<Atividade> data = atividadeRepository.findById(id);
    List<Atividade> data = atividadeRepository.findById(id);
    Atividade atividadenew = data.get(0);
    atividadenew.setTitulo(atividade.getTitulo());
    atividadenew.setDescricao(atividade.getDescricao());
    atividadenew.setGravidade(atividade.getGravidade());
    atividadenew.setUrgencia(atividade.getUrgencia());
    atividadenew.setTendencia(atividade.getTendencia());
     System.out.println("Atualizado");
    atividadeRepository.save(atividadenew);
  }

  @GetMapping("rest/list/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Atividade> findById(@PathVariable int id) {

    List<Atividade> list = atividadeRepository.findById(id);
    return list;
  }

  @RequestMapping( method = RequestMethod.POST, value = "/rest/add")
  @CrossOrigin(origins = "http://localhost:4200")
  public void addAtividade(@RequestBody Atividade atividade) {
      atividadeRepository.save(atividade);
      System.out.println("Saved");

    }

  @DeleteMapping("rest/edit/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void deleteAtividade(@PathVariable int id){
       atividadeRepository.deleteById(id);
     System.out.println("Deletado");
  }

}
