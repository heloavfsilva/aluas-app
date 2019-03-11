package br.com.aluasdev.controller;


import br.com.aluasdev.dao.UserRepository;
import br.com.aluasdev.model.User;
import br.com.aluasdev.model.Acesso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
  public Acesso validaUser(@RequestBody Map<String, String> params) {
    System.out.println(params.get("username"));
    Acesso checkin = new Acesso();

    try {
      String username = params.get("username");
      String password = params.get("password");
      User data = userRepository.findByUsername(username);
      System.out.println("Validando");
      //String validaPass = data.getPassword();

      if (data.getPassword().contentEquals(password)) {
        checkin.setUsername(data.getUsername());
        checkin.setEntrada(LocalDateTime.now().toString());
        checkin.setToken("fake-jwt-token");
//        userRepository.save(checkin);
        return checkin;
      } else {
        return checkin;
      }
    }catch (Exception e){
      System.out.println("not found");
      return checkin;
    }

  }

  @RequestMapping(method = RequestMethod.POST, value = "/auth/register")
  @CrossOrigin(origins = "http://localhost:4200")
  public void addUser(@RequestBody User user) {
    userRepository.save(user);
    System.out.println("Saved");

  }

  @PutMapping("/auth/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void updateUser(@PathVariable("id") int id, @RequestBody User atividade){
    //Optional<Atividade> data = atividadeRepository.findById(id);
    List<User> data = userRepository.findById(id);
    User usernew = data.get(0);
    usernew.setEmail(atividade.getEmail());
    usernew.setPrimeiroNome(atividade.getPrimeiroNome());
    usernew.setSobrenome(atividade.getSobrenome());
    usernew.setPassword(atividade.getPassword());
    usernew.setScoreAcumulado(atividade.getScoreAcumulado());
    usernew.setTelefone(atividade.getTelefone());
    usernew.setFoto(atividade.getFoto());
    System.out.println("Atualizado");
    userRepository.save(usernew);
  }


  @DeleteMapping("/auth/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void deleteUser(@PathVariable int id){
      userRepository.deleteById(id);
      System.out.println("Deletado");
  }

  @GetMapping("/auth/{username}")
  @CrossOrigin(origins = "http://localhost:4200")
  public User findUser(@PathVariable String username) {

    User user = userRepository.findByUsername(username);
    return user;
  }

}
