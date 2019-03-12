package br.com.aluasdev.controller;


import br.com.aluasdev.dao.AcessoRepository;
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
  @Autowired
  private AcessoController acessoController = new AcessoController();

  @GetMapping("/auth")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<User> listAll() {
    List<User> list = new ArrayList<>();
    Iterable<User> atividades = userRepository.findAll();

    atividades.forEach(list::add);
    return list;
  }

  @GetMapping("/auth/{username}")
  @CrossOrigin(origins = "http://localhost:4200")
  public User findUser(@PathVariable String username) {
    User user = userRepository.findByUsername(username);
    return user;
  }


  @RequestMapping(method = RequestMethod.POST, value = "/auth")
  @CrossOrigin(origins = "http://localhost:4200")
  public Acesso validaUser(@RequestBody Map<String, String> params) {
    System.out.println(params.get("username"));
    Acesso check = new Acesso();

    String username = params.get("username");
    String password = params.get("password");
    User data = userRepository.findByUsername(username);
    System.out.println("Validando");

    try {
      if (data.getPassword().contentEquals(password)) {
        check.setUsername(data.getUsername());
        check.setUsuario(data.getId());
        check.setEntrada(LocalDateTime.now().toString());
        check.setToken("fake-jwt-token");
        acessoController.saveAcesso(check);
        return check;
      } else {
        return check;
      }
    } catch (Exception e) {
      System.out.println(e);
    }

    return check;
  }

  @RequestMapping(method = RequestMethod.POST, value = "/auth/register")
  @CrossOrigin(origins = "http://localhost:4200")
  public void addUser(@RequestBody User user) {
    userRepository.save(user);
    System.out.println("Saved");

  }

  @PutMapping("/auth/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
  public void updateUser(@PathVariable("id") int id, @RequestBody User atividade) {
    User usernew = userRepository.findById(id);
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

}
