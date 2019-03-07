package br.com.aluasdev.controller;


import br.com.aluasdev.dao.AtividadeRepository;
import br.com.aluasdev.dao.UserRepository;
import br.com.aluasdev.model.Atividade;
import br.com.aluasdev.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
  @Autowired
  private UserRepository userRepository;

  @GetMapping("/auth")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<User> listAll (){
    List<User> list = new ArrayList<>();
    Iterable<User> atividades = userRepository.findAll();

    atividades.forEach(list::add);
    return list;
  }

  @RequestMapping( method = RequestMethod.POST, value = "/auth")
  @CrossOrigin(origins = "http://localhost:4200")
  public boolean validaUser(@RequestBody User user) {
    User data = userRepository.findByEmail(user.getEmail());
    System.out.println("Validando");

    return (data.getEmail() == user.getEmail() && data.getSenha() == user.getSenha());
  }

  @RequestMapping( method = RequestMethod.POST, value = "/auth/add")
  @CrossOrigin(origins = "http://localhost:4200")
  public void addUser(@RequestBody User user) {
    userRepository.save(user);
    System.out.println("Saved");

  }

  @PutMapping("/auth/add/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void updateUser(@PathVariable("id") int id, @RequestBody User atividade){
    //Optional<Atividade> data = atividadeRepository.findById(id);
    List<User> data = userRepository.findById(id);
    User usernew = data.get(0);
    usernew.setEmail(atividade.getEmail());
    usernew.setPrimeiroNome(atividade.getPrimeiroNome());
    usernew.setSobrenome(atividade.getSobrenome());
    usernew.setSenha(atividade.getSenha());
    usernew.setScoreAcumulado(atividade.getScoreAcumulado());
    usernew.setTelefone(atividade.getTelefone());
    usernew.setFoto(atividade.getFoto());
    System.out.println("Atualizado");
    userRepository.save(usernew);
  }


  @DeleteMapping("/auth/edit/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void deleteUser(@PathVariable int id){
      userRepository.deleteById(id);
      System.out.println("Deletado");
  }

}
