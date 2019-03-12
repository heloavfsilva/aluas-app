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
  @Autowired
  private ControleController controleController = new ControleController();

  @GetMapping("/rest/{usuario}")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Atividade> listAll(@PathVariable("usuario") int usuario) {
    List<Atividade> list = new ArrayList<>();
    Iterable<Atividade> atividades = atividadeRepository.findByUsuario(usuario);

    atividades.forEach(list::add);
    return list;
  }

  @GetMapping("rest/list/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public Atividade findById(@PathVariable int id) {
    Atividade list = atividadeRepository.findById(id);
    return list;
  }

  @RequestMapping(method = RequestMethod.POST, value = "/rest/add")
  @CrossOrigin(origins = "http://localhost:4200")
  public Atividade addAtividade(@RequestBody Atividade atividade) {
    atividadeRepository.save(atividade);
    controleController.mapUserAtividade(atividade.getId(), atividade.getUsuario());
    System.out.println("Saved");
    return atividade;
  }

  @PutMapping("rest/comp/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void completeAtividade(@PathVariable("id") int id) {
    Atividade data = atividadeRepository.findById(id);
    data.setStatus("Completed");
    controleController.completeControle(id);

  }


  @PutMapping("rest/add/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void updateAtividade(@PathVariable("id") int id, @RequestBody Atividade atividade) {
    Atividade data = atividadeRepository.findById(id);
    data.setTitulo(atividade.getTitulo());
    data.setDescricao(atividade.getDescricao());
    data.setGravidade(atividade.getGravidade());
    data.setUrgencia(atividade.getUrgencia());
    data.setTendencia(atividade.getTendencia());
    data.setStatus("Ongoing");
    atividadeRepository.save(data);
    controleController.updateControle(atividade.getId(), atividade.getUsuario());

  }

  @DeleteMapping("rest/edit/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void deleteAtividade(@PathVariable int id) {
    atividadeRepository.deleteById(id);
    controleController.deleteControle(id);
  }

}
