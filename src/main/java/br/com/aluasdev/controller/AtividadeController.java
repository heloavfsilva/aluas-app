package br.com.aluasdev.controller;

import br.com.aluasdev.dao.AtividadeRepository;
import br.com.aluasdev.model.Atividade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


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
  public void updateAtividade(@PathVariable("id") long id, @RequestBody Atividade atividade){
    Optional<Atividade> data = atividadeRepository.findById(id);
    if (data.isPresent()) {
      Atividade _atividade = data.get();
      _atividade.setTitulo(atividade.getTitulo());
      _atividade.setDescricao(atividade.getDescricao());
      _atividade.setGravidade(atividade.getGravidade());
      _atividade.setUrgencia(atividade.getUrgencia());
      _atividade.setTendencia(atividade.getTendencia());
      System.out.println("Atualizado");
    }
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

  @DeleteMapping(value="rest/edit/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void deleteAtividade(@PathVariable long id){
     atividadeRepository.deleteById(id);
    System.out.println("Deletado");
  }

}
